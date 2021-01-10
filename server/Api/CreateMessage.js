const express = require('express');
const mongoose = require("mongoose")
const Message = require("../DB/CreateMessage")
const route = express.Router();


route.post('/message', async (req, res)=>{
    const { fullName, email, textarea } = req.body;

    let message = {};
    message.fullName  = fullName,
    message.email = email,
    message.textarea = textarea

    try{
        let messageModel = new Message(message);
        await messageModel.save();
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.status(200).json(messageModel)
    } catch(err){
        res.status(400).json({ message: err.message })
    }
})

module.exports = route;
