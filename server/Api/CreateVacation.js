const express = require("express");
const mongoose = require("mongoose")

const Vacation = require("../DB/CreateVacation")
const route = express.Router();

route.post('/', async (req, res)=>{
    const { destination, description, price, picture, startDate, endDate } = req.body;
    let vacation = {};
    vacation.destination = destination,
    vacation.description = description,
    vacation.price = price,
    vacation.picture = picture
    vacation.startDate = startDate
    vacation.endDate = endDate

    let vacationModel = new Vacation (vacation);
    await vacationModel.save();
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Credentials',true);
    res.json(vacationModel)
});

module.exports = route;
