const postModel = require(`../../model/postModel`);
exports.updatePost = async (req, res) => {
  try {
      await postModel.postModel.findByIdAndUpdate({
          _id: req.body.id
      },{  
      post: req.body.post
    });
    res.status(200).json({ success: "one post updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "catch error in update post controller", error });
  }
};
