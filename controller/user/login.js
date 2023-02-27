const userModel = require(`../../model/userModel`);
const bcrypt = require(`bcryptjs`);
const jwt = require(`jsonwebtoken`);
const { validationResult } = require(`express-validator`);
exports.login = async (req, res) => {
  try {
    const loginError = validationResult(req);
    if (loginError.isEmpty()) {
      const user = await userModel.userModel.findOne({ email: req.body.email });
      if (user) {
        const matches = await bcrypt.compare(req.body.password, user.password);
        if (matches) {
          const token = jwt.sign({ userId: user._id }, "shhhh");
          res
            .header({ token })
            .status(200)
            .json({ loginApproved: `welcome ${user.firstName}` });
        } else {
          res.status(500).json({ error: "invalid email or password" });
        }
      } else {
        res.status(500).json({ error: "user not Exist" });
      }
    } else {
      res
        .status(500)
        .json({ error: "validation error", error: loginError.array() });
    }
  } catch (error) {
    res.status(500).json({ error: "catch error in login controller", error });
  }
};
