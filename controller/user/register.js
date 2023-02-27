const userModel = require(`../../model/userModel`);
const bcrypt = require(`bcryptjs`);
const { validationResult } = require(`express-validator`);
exports.register = async (req, res) => {
  try {
    const registerError = validationResult(req);
    if (registerError.isEmpty()) {
      const userExist = await userModel.userModel.findOne({ email: req.body.email });
      if (userExist) {
        res.status(500).json({ error: "email already exist try another one" });
      } else {
        bcrypt.hash(req.body.password, 12, async (err, hash) => {
          if (err) {
            res
              .status(500)
              .json({ error: "error happened while hashing the password" });
          } else {
            await userModel.userModel.insertMany({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: hash,
              gender: req.body.gender,
            });
            res.status(201).json({ success: "one user added successfully" });
          }
        });
      }
    } else {
      res.status(500).json({
        error: `error happened in data input validation`,
        error: registerError.array(),
      });
    }
  } catch (error) {
    res.status(500).json({ error: `catch error in register new user`,error });
  }
};
