const verifyToken = (req, res, next) => {
    // const beraerHeader = req['authorization'];
    const beraerHeader = req.headers['authorization'];
    console.log("bererHerder-----" + beraerHeader)
    if (typeof beraerHeader !== 'undefined') {
        const beraer = beraerHeader.split(' ');
        const beraerToken = beraer[1];
        req.token = beraerToken;
        next();
    } else {
        return res.status(400);
    }
}
module.exports = verifyToken;
 