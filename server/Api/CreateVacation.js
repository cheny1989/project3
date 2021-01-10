const express = require("express");
const mongoose = require("mongoose")
const Vacation = require("../DB/CreateVacation")
const route = express.Router();

route.post('/post', async (req, res) => {
    const { destination, description, price, picture, startDate, endDate } = req.body;
    let vacation = {};
        _id = new mongoose.Types.ObjectId();
        vacation.destination = destination,
        vacation.description = description,
        vacation.price = price,
        vacation.picture = picture
        vacation.startDate = startDate
        vacation.endDate = endDate

    try {
        let vacationModel = new Vacation(vacation);
        await vacationModel.save();
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.status(200).json(vacationModel)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

route.get('/get', async (req, res) => {
    try {
        const showVacation = await Vacation.find();
        res.status(200).json(showVacation);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

route.delete('/delete', async (req, res) => {
    try {
        const deleteVacation = await Vacation.find();
        Vacation.deleteOne({_id: deleteVacation})
            res.status(200).json({message: `id${deleteVacation} Deleted`})
        // res.send(vacation.find(_id => _id._id === deleteVacation))
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


module.exports = route;
