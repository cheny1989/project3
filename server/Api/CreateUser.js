const express = require("express");
const mongoose = require("mongoose")
const bcrypt = require('bcrypt');

const User = require("../DB/CreateUser")
const route = express.Router();

route.post('/post', async (req, res)=>{
    const { firstName, lastName, userName, password } = req.body;
    let user = {};
    user.firstName = firstName,
    user.lastName = lastName,
    user.userName = userName,
    user.password = password

    let findUser = await User.findOne({userName: req.body.userName});
    if(findUser){
        return res.status(400).send('That user already exisits!');
    } else{
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt)
        let userModel = new User(user);
        await userModel.save();
        res.json(userModel);
    }
})

module.exports = route;
