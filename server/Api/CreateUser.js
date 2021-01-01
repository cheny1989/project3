const express = require("express");
const mongoose = require("mongoose")

const User = require("../DB/User_Schema")
const route = express.Router();

route.post('/', async (req, res)=>{
    const { firstName, lastName, userName, password } = req.body;
    let user = {};
    user.firstName = firstName,
    user.lastName = lastName,
    user.userName = userName,
    user.password = password

    let userModel = new Comment (user);
    await userModel.save();
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Credentials',true);
    res.json(userModel)
});

module.exports = route;
