const mongoose = require('mongoose');

const createUser = new mongoose.Schema({
    firstName:({
        type: String
    }),
    lastName: ({
        type: String, 
    }),
    userName: ({
        type: String
    }),
    password: ({
        type: String
    })
})

module.exports = CreateUser = mongoose.model("createUser", createUser)