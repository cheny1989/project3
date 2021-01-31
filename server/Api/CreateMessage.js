const express = require('express');
const mongoose = require("mongoose");
const Message = require("../DB/CreateMessage");
const route = express.Router();
const nodemailer = require("nodemailer");


route.post('/message', async (req, res) => {
    const { fullName, email, textarea, subjectOfMessage, html } = req.body;

    let message = {};
    message.fullName = fullName,
        message.email = email,
        message.subjectOfMessage = subjectOfMessage,
        message.textarea = textarea
    // message.html = html

    try {
        let messageModel = new Message(message);
        await messageModel.save();
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.status(200).json(messageModel)

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 587, false for other ports
        requireTLS: true,
        auth: {
            user: `${process.env.EMAIL}`,
            pass: `${process.env.PASSWORD}`
        },
    })

    var mailOption = {
        to: 'chenyaa89@gmail.com', // change The Email Address to check it
        subject: subjectOfMessage,
        html: '<b>' + 'New Message from: ' + '</b>' + fullName + '<br>' + '<b>' + 'The message: ' + '</b>' + textarea
    }

    transporter.sendMail(mailOption, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log('Email sent: ' + info.response);
        }
    })

})

module.exports = route;
