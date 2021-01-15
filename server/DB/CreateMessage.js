const mongoose = require('mongoose');

const createMessage = new mongoose.Schema({
    fullName:({
        type: String
    }),
    email:({
        type: String
    }),
    subjectOfMessage:({
        type: String
    }),
    textarea:{
        type: String
    },
})

module.exports = CreateMessage = mongoose.model("createMessage", createMessage)
