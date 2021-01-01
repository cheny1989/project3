const mongoose = require('mongoose');

const createVacation = new mongoose.Schema({
    destination:({
        type: String
    }),
    description: ({
        type: String, 
    }),
    userName: ({
        price: Number
    }),
    picture: ({
        type: String
    }),
    StartDate: ({
        type: String
    }),
    EndDate: ({
        type: String
    })
})

module.exports = createVacation = mongoose.model("createVacation", createVacation)