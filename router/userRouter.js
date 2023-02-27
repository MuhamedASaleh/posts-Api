const app = require(`express`).Router();

const registerControl = require(`../controller/user/register`);
const registerValidation = require(`../middleware/registerValidation`);
app.post(
  `/register`,
  registerValidation.registerValidationCheck,
  registerControl.register
);

const loginControl = require(`../controller/user/login`);
const loginValidation = require(`../middleware/loginValidation`);
app.post(
  `/login`,
  loginValidation.loginValidationCheck,
  loginControl.login
);

const deleteUserControl = require(`../controller/user/deleteUser`)
app.delete(`/delete`, deleteUserControl.deleteUser)

const updateUserControl = require(`../controller/user/updateUser`)
app.patch(`/update`,updateUserControl.updateUser)


module.exports = app;
