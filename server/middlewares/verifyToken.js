
// const verifyToken=(req, res, next)=> {
//     const bearerHeader = req.headers['authorization'];
//     console.log("bearerHeader-----" + bearerHeader)
//     if (typeof bearerHeader !== 'undefined') {
//         const beraer  = bearerHeader.split(' ');
//         const bererToken = beraer[1];
//         req.token = bererToken;
//         next();
//     } else {
//         return res.status(400);
//     }
// }
// module.exports = verifyToken; 


