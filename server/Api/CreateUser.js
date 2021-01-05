const express = require("express");
const mongoose = require("mongoose")
const bcrypt = require('bcrypt');

const User = require("../DB/CreateUser")
const route = express.Router();

route.post('/', async (req, res)=>{
    const { firstName, lastName, userName, password } = req.body;
    let user = {};
    user.firstName = firstName,
    user.lastName = lastName,
    user.userName = userName,
    user.password = password

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt)

    let userModel = new User (user);
    await userModel.save();
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Credentials',true);
    res.json(userModel)
});

module.exports = route;
