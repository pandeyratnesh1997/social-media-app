const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter the name"],
  },
  avatar: {
    publicId: String,
    url: String,
  },
  email: {
    type: String,
    required: [true, "Please Enter the Email"],
    unique: [true, "Email already exist"],
  },
  password: {
    type: String,
    required: [true, "Please Enter the Password"],
    minlength: [6, "Password must have atleast 6 characters"],
    select: false,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
  followres: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],

  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});


const userModel = new mongoose.model('user', userSchema);

module.exports = userModel;

