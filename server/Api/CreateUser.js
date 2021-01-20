const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../DB/CreateUser");
const { token } = require("morgan");
const route = express.Router();


// to logout request
const refreshTokens = [];

// request - register
route.post('/register', async (req, res) => {
    const { firstName, lastName, userName, password } = req.body;
    let user = {};
    user.firstName = firstName,
        user.lastName = lastName,
        user.userName = userName,
        user.password = password

    let findUser = await User.findOne({ userName: req.body.userName });

    if (findUser) {
        return res.status(400).send('That user already exisits!');
    } else {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt)
        let userModel = new User(user);
        await userModel.save();
        return res.status(200).json(userModel);
    }
});

// request - register all users
route.get('/register', async (req, res) => {
    try {
        const showUser = await User.find();
        res.status(200).json(showUser);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

// request - login (get any user by username and password [before hash])
route.post('/login', async (req, res) => {
    const { userName, password } = req.body;

    User.find({ userName }).then((users) => {
        if (users.length === 0) {
            return res.status(400).json({ message: "Username or Password failed" });
        }

        const [user] = users;
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return res.status(400).json({ message: "Username or Password failed" });
            }
            if (result) {
                const token = jwt.sign({
                    id: user._id,
                    userName: user.userName
                },
                    process.env.LOGIN_PASSWORD,
                    {
                        expiresIn: "1h" // after 1 hour - the user logout
                    });
                return res.status(200).json({ message: "You are now login!", token });
            }
            return res.status(400).json({ message: "Username or Password failed" });
        })
    })
});


// chen *********************************************************************
// function verifyToken(req, res, next) {
//     const bererHerder = req.headers['authorization'];
//     if (typeof bererHerder !== 'undefined') {
//         const beraer  = bererHerder.split(' ');
//         const bererToken = beraer[1];
//         req.token = bererToken;
//         next();
//     } else {
//         res.status(400);
//     }
// }

// route.get('/test', verifyToken, (req, res) => {
//     jwt.verify(req.token, process.env.LOGIN_PASSWORD, (err, authData) => {
//         if (err) {
//             res.status(400)
//         } else {
//             res.json({ message: "VerifyToken created", authData })
//         }
//     })
// })


// new *************************************
function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log(token)
    if (token == null) {
        return res.sendStatus(401);
    }
    jwt.verify(token, process.env.LOGIN_PASSWORD, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
}

route.get("/loginnew", verifyToken, (req, res) => {
    const userName = req.body.userName;
    const user = { user: userName };
    try {
        jwt.sign(user, process.env.LOGIN_PASSWORD, (err, token) => {
            res.json({ message: "VerifyToken created!", token: token });
        });
    } catch (err) {
        return res.sendStatus(403);
    }
});

// ***************************************************************************

route.delete('/logout', async (req, res) => {
    refreshTokens = await refreshTokens.filter(token => token !== req.body.token);
    try {
        res.status(204).json({ message: "You are logout!" })
    } catch (err) {
        res.status(400).json({ err: "ERROR LOGOUT" })
    }
});



module.exports = route;
