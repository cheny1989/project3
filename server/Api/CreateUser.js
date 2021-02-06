const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../DB/CreateUser");
// const { token } = require("morgan");
const route = express.Router();

const verifyToken = require("../middlewares/verifyToken");
const { findByIdAndRemove } = require("../DB/CreateUser");


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
        res.status(400).json('That user already exisits! please Choose different username');
        console.log({message: "That user already exisits! please Choose different username", userName });
        return;

    } else {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt)
        let userModel = new User(user);
        await userModel.save();
        res.status(200).json('Created New User!');
        console.log({message: "Created New User!", userModel });
        return;
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
            // return res.status(400).json({ message: "Username or Password failed" });
            res.status(400).json('Username or Password failed');
            console.log({message: "Username or Password failed" });
            return;
        }
        const [user] = users;
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                // return res.status(400).json({ message: "Username or Password failed" });
                res.status(400).json('Username or Password failed');
                console.log({message: "Username or Password failed" });
                return;
            }
            if (result) {
                const token = jwt.sign({
                    id: user._id,
                    userName: user.userName
                },
                    process.env.LOGIN_PASSWORD,
                    {
                        expiresIn: "30m" // after 30 min - the user logout
                    });
                res.status(200).json({ message: "You are now logged!", token: token });
                console.log({message: "You are now login!" });
                console.log({ user: userName });
                console.log({ token: token });
                return;
            }
            return res.status(400).json({ message: "Username or Password failed" });
        })
    })
});

// token and verifyToken
route.post('/token', verifyToken, (req, res) => {
    jwt.verify(req.token, process.env.LOGIN_PASSWORD, (err, authData) => {
        if (err) {
            res.send(req.user)
            console.log(req.user)
            return res.status(400).json({ message: "ERROR TOKEN" });
        } else {
            return res.status(200).json({ message: "VerifyToken created", authData, token: req.token })
        }
    })
});

route.post('/logout', (req,res)=>{
    User.findByIdAndRemove(req.token,(err,user)=>{
        if(err){
            return res.status(400).json({ err: "ERROR" });
        } else{
            res.status(200).json({ message: "LOGOUT", user: req.user });
            console.log({ message: user });
            return 
        }
    });

}); 

module.exports = route;
