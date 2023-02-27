const postModel = require(`../../model/postModel`);
exports.allPost = async (req, res) => {
  try {
    const allPosts = await postModel.postModel.find();
    res.status(200).json({ allPosts: allPosts });
  } catch (error) {
    res
      .status(500)
      .json({ error: "catch error in get all posts controller", error });
  }
};
