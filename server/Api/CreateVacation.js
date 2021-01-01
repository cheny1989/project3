const express = require("express");
const mongoose = require("mongoose")

const Vacation = require("../DB/Vacation_Schema")
const route = express.Router();

route.post('/', async (req, res)=>{
    const { destination, description, userName, picture, StartDate, EndDate } = req.body;
    let vacation = {};
    vacation.destination = destination,
    vacation.description = description,
    vacation.userName = userName,
    vacation.picture = picture
    vacation.StartDate = StartDate
    vacation.EndDate = EndDate

    let vacationModel = new Comment (vacation);
    await vacationModel.save();
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Credentials',true);
    res.json(vacationModel)
});

module.exports = route;
