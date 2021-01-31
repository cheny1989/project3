const express = require("express");
const mongoose = require("mongoose");
const Vacation = require("../DB/CreateVacation");
const route = express.Router();
// const jwt = require('jsonwebtoken');


// const verifyToken = require("../middlewares/verifyToken")

route.post('/post', async (req, res) => {
    const { destination, description, price, picture, startDate, endDate } = req.body;
    let vacation = {};
    vacation.destination = destination,
        vacation.description = description,
        vacation.price = price,
        vacation.picture = picture,
        vacation.startDate = startDate,
        vacation.endDate = endDate

    try {
        let vacationModel = new Vacation(vacation);
        await vacationModel.save();
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Credentials', true);
        return res.status(200).json(vacationModel)
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
});

route.get('/get', async (req, res) => {
    try {
        const showVacation = await Vacation.find();
        return res.status(200).json(showVacation);
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
});


route.delete('/delete/:id', async (req, res) => {
    let deleteVacation = { _id: req.params.id }
    Vacation.remove(deleteVacation, function (err) {
        if (err) {
            console.log(err);
        }
        return res.send('Success')
    });
});


route.put('/edit/:id', async (req, res) => {
    console.log(req.params.id);

    Vacation.findByIdAndUpdate({ _id: req.params.id }, {
        $set: {
            destination: req.body.destination,
            description: req.body.description,
            price: req.body.price,
            picture: req.body.picture,
            startDate: req.body.startDate,
            endDate: req.body.endDate
        }
    })
        .then(result => {
            return res.status(200).json({ updated_vacation: result })
        })
        .catch(err => {
            console.log(err);
            return res.status(400).json({
                error: err
            })
        })
})


module.exports = route;
