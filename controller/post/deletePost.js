const userModel = require(`../../model/userModel`);
const postModel = require(`../../model/postModel`);
exports.deletePost = async (req, res) => {
  try {
    const theDeletedPost = await postModel.postModel.findById(req.body.id);
    if (theDeletedPost) {
      await postModel.postModel.deleteOne({
        _id: req.body.id,
      });

      const user = await userModel.userModel.findOne({ _id: req.userId });

      const newPost = user.allPost.filter((post) => {
        if (post._id != req.body.id) {
          return post;
        }
      });
      await userModel.userModel.findByIdAndUpdate(
        { _id: req.userId },
        {
          $set: {
            allPost: newPost,
            numberOfPost: newPost.length,
          },
        }
      );
      res.status(200).json({ success: "one post deleted successfully" });
    } else {
      res.status(404).json({ deleteError: "post not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "catch error in delete post controller", error });
  }
};
