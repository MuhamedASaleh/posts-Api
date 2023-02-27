const mongoose = require(`mongoose`);

const postSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      res: "user",
    },
    post: { type: String, required: true }
  },
  {
    timestamps: true,
  }
);

const postModel = mongoose.model(`post`, postSchema);

exports.postModel = postModel;
