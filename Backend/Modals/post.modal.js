const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    caption : {type: String,},
    description : {type: String},
    images : {
        publicId : String,
        url : String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      likes: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      comments: [
        {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
          comment: {
            type: String,
            required: true,
          },
        },
      ],
});


const postModel = new mongoose.model('Post', postSchema);

module.exports = postModel;