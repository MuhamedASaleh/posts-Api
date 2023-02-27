const { check } = require(`express-validator`)

exports.loginValidationCheck = [
    check(`email`).isEmail(),
  check(`password`).matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*_]).{8,}$/
  )
]