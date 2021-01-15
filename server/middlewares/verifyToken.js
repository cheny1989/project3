// const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const bearerHerder = req.headers['authorization'];
    if (typeof bearerHerder !== 'undefined') {
        const bearer = bearerHerder.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(400);
    }
};

module.exports = verifyToken; 

