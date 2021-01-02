const stringValidator = require("../utils/stringValidator");
const roles = require("../security/roles");
const allowedRoles = [roles.ADMIN, roles.GUEST];

const validate = newUserData => {
    let { firstName, lastName, userName, password }
}

