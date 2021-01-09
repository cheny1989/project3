const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next)=>{
    try{
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.LOGIN_PASSWORD)
    next();
    } catch(err){
        return res.status(400).json({ message: 'Auth failed' })
    }
}

module.exports = checkAuth;