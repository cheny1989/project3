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

module.exports = createUser = mongoose.model("createUser", createUser)