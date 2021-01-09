const express = require("express");
const mongoose = require("mongoose")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const User = require("../DB/CreateUser")
const route = express.Router();

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
})

route.get('/register', async (req, res) => {
    try {
        const showUser = await User.find();
        res.status(200).json(showUser);
        // console.log(Comment);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

route.post('/login', async (req, res) => {
    const { userName, password } = req.body;

        User.find({userName}).then((users)=>{
            if(users.length === 0){
                return res.status(400).json({
                    message: "Auth failed 1"
                });
            }

            const [ user ] = users;
            bcrypt.compare(password, user.password, (err, result)=>{
                if(err){
                    return res.status(400).json({
                        message: "Auth failed 2"
                    });
                }
                if(result){
                    const token = jwt.sign({
                        id: user._id,
                        userName: user.userName,
                    },
                    process.env.LOGIN_PASSWORD,
                    {
                        expiresIn: "1h"
                    });
                    return res.status(200).json({
                        message: "Yes! You are login!",
                        token
                    });
                }
                return res.status(400).json({
                    message: "Auth failed 3"
                });
            })
        })
})

module.exports = route;
