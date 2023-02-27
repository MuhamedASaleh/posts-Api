const bcrypt = require(`bcryptjs`);
const userModel = require(`../../model/userModel`);
exports.updateUser = async (req, res) => {
  try {
    await userModel.userModel.findByIdAndUpdate(
      { _id: req.body.id },
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender,
      }
    );
    res.status(200).json({ error: "one user update successfully" });
    if (req.body.password) {
      bcrypt.hash(req.body.password, 12, async (err, hash) => {
        await userModel.userModel.findByIdAndUpdate(
          { _id: req.body.id },
          {
            password: hash
          }
        );
      });
    }
  } catch (error) {
    res.status(500).json({
      error: `catch error in update user information control ${error}`,
    });
  }
};
