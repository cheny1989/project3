const apiRouter = require('express').Router();

apiRouter.use('./ApiUser', require('./Api/CreateUser'));
apiRouter.use('./ApiVacation', require('./Api/CreateVacation'));

apiRouter.use('./DBUser_Schema', require('./DB/User_Schema'));
apiRouter.use('./DBVacation_Schema', require('./DB/Vacation_Schema'));

apiRouter.use('./URIUser_Schema', require('./DB/User_URI'));
apiRouter.use('./DBVacation_Schema', require('./DB/Vacation_URI'));
