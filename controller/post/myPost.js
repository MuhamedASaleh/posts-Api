const postModel = require(`../../model/postModel`);
exports.myPosts = async (req, res) => {
  try {
      const myPosts = await postModel.postModel.find({
      userId : req.userId
    });
    res.status(200).json({ success: myPosts });
  } catch (error) {
    res
      .status(500)
      .json({ error: "catch error in get my posts controller", error });
  }
};
