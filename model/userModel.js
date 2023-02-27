const mongoose = require(`mongoose`);

const userSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"], default: "male" },
    numberOfPost: { type: Number, default: 0 },
    allPost: Array,
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model(`user`, userSchema);
exports.userModel = userModel;
