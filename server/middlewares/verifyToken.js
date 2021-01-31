const verifyToken = (req, res, next) => {
    const berearHerder = req.headers['authorization'];
    console.log("bererHerder-----" + berearHerder)
    if (typeof berearHerder !== 'undefined') {
        const beraer = berearHerder.split(' ');
        const bererToken = beraer[1];
        req.token = bererToken;
        next();
    } else {
        return res.status(400);
    }
}
module.exports = verifyToken;


