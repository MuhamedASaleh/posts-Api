const userModel = require(`../../model/userModel`);
const postModel = require(`../../model/postModel`);

exports.deleteUser = async (req, res) => {
  try {
    const user = await userModel.userModel.findById(req.body.id);
    if (user) {
      await userModel.userModel.deleteOne({ _id: user._id });

      const userPosts = await postModel.postModel.find({ userId: req.body.id });
      userPosts.map(async (note) => {
        await postModel.postModel.deleteOne({ userId: note.userId });
      });
      res.status(200).json({ deleteUser: "delete user successfully" });
    } else {
      res.status(500).json({ deleteUserError: "invalid id" });
    }
  } catch (error) {
    res.status(500).json({ error: "catch error in delete user controller" });
  }
};
