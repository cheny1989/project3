const apiRouter = require('express').Router();

// const checkAuth = require('./middlewares/checkAuth')
// apiRouter.use('/apivacation', checkAuth,  require('./Api/CreateVacation'));

// requests
apiRouter.use('/apiuser', require('./Api/CreateUser'));
apiRouter.use('/apivacation',  require('./Api/CreateVacation'));
apiRouter.use('/apimessage', require('./Api/CreateMessage'));

// URI - link to mongoose
const URI_Mongoose = require('./DB/URI_Mongoose');
URI_Mongoose();

module.exports = apiRouter;

