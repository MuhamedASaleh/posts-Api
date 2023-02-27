const { check } = require(`express-validator`);

exports.registerValidationCheck = [
  check(`firstName`).notEmpty(),
  check(`lastName`).notEmpty(),
  check(`email`).isEmail(),
  check(`password`).matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*_]).{8,}$/
  ),
];
