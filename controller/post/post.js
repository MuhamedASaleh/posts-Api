const postModel = require(`../../model/postModel`);
const userModel = require(`../../model/userModel`);
exports.addPost = async (req, res) => {
  try {
    await postModel.postModel.insertMany({
      userId: req.userId,
      post: req.body.post
    });

    
    const allPosts = await postModel.postModel.find({
      userId: req.userId,
    });
    
    await userModel.userModel.findByIdAndUpdate(
      { _id: req.userId },
      {
        $set: {
          allPost: allPosts,

          numberOfPost: allPosts.length,
        },
      }
      );
      res.status(200).json({ success: "one post added successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "catch error in add new post controller", error });
  }
};
