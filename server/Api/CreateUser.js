const express = require("express");
const mongoose = require("mongoose")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../DB/CreateUser")
const route = express.Router();

// const checkAuth = require("../middlewares/checkAuth")

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
            return res.status(400).json({
                message: "Username or Password failed"
            });
        }

        const [user] = users;
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return res.status(400).json({ message: "Username or Password failed" });
            }
            if (result) {
                const token = jwt.sign({
                    id: user._id,
                    userName: user.userName,
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

route.get('/test', verifyToken, (req, res) => {
    jwt.verify(req.token, process.env.LOGIN_PASSWORD, (err, authData) => {
        if (err) {
            res.sendStatus(400)
        } else {
            res.json({
                message: "Post created",
                authData
            })
        }
    })
})

function verifyToken(req, res, next) {
    const bearerHerder = req.headers['authorization'];
    if (typeof bearerHerder !== 'undefined') {
        const bearer = bearerHerder.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(400);
    }
}


module.exports = route;
