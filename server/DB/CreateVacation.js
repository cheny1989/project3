const mongoose = require('mongoose');

const createVacation = new mongoose.Schema({
    destination: ({
        type: String
    }),
    description: ({
        type: String,
    }),
    price: ({
        type: String
    }),
    picture: ({
        type: String
    }),
    startDate: ({
        type: String
    }),
    endDate: ({
        type: String
    })
})

module.exports = CreateVacation = mongoose.model("createVacation", createVacation)