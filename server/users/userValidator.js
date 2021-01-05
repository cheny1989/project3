// const stringValidator = require("../utils/stringValidator");
// // const roles = require("../security/roles");
// // const allowedRoles = [roles.ADMIN, roles.GUEST];

// const validate = newUserData => {
//     let { firstName, lastName, userName, password } = newUserData;
//     let errors = [];
//     if (userName){
//         userName = userName.trim().toLowerCase();
//     }
//     stringValidator.checkString('First name', firstName, 3, 10, errors);
//     stringValidator.checkString('Last name', lastName, 3, 10, errors);
//     stringValidator.checkString('User name', userName, 3, 10, errors);
//     stringValidator.checkString('Password', password, 3, 10, errors);

//     return {  firstName, lastName, userName, password, errors }
// }

// module.exports = {validate};