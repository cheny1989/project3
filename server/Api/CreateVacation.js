const express = require("express");
const mongoose = require("mongoose");
const Vacation = require("../DB/CreateVacation");
const route = express.Router();
const jwt = require('jsonwebtoken');


const verifyToken = require('../middlewares/verifyToken');

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


route.delete('/delete/:id', async (req, res) => {
    let deleteVacation = { _id: req.params.id }
    Vacation.remove(deleteVacation, function (err) {
        if (err) {
            console.log(err);
        }
        res.send('Success')
    });
});


route.put('/edit/:id', async (req, res)=>{
    console.log(req.params.id);

    Vacation.findByIdAndUpdate({_id: req.params.id},{
        $set:{
            destination: req.body.destination,
            description: req.body.description,
            price: req.body.price,
            picture: req.body.picture,
            startDate: req.body.startDate,
            endDate: req.body.endDate
        }
    })
    .then(result =>{
        res.status(200).json({updated_vacation: result})
    })
    .catch(err=>{
        console.log(err);
        res.status(400).json({error: err
        })
    })
})




// route.post('/test', verifyToken, (req, res) => {
//     jwt.verify(req.token, process.env.LOGIN_PASSWORD, (err, authData) => {
//         if (err) {
//             res.sendStatus(400)
//         } else {
//             res.json({
//                 message: "Post created",
//                 authData
//             })
//         }
//     })
// })

// function verifyToken(req, res, next) {
//     const bearerHerder = req.headers['authorization'];
//     if (typeof bearerHerder !== 'undefined') {
//         const bearer = bearerHerder.split(' ');
//         const bearerToken = bearer[1];
//         req.token = bearerToken;
//         next();
//     } else {
//         res.sendStatus(400);
//     }
// }

module.exports = route;
