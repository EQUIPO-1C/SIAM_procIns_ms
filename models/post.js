// import mongoose
const mongoose = require('mongoose');
// extract the schema from that mongoose object
const Schema = mongoose.Schema;
// create a new post schema
const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});
// export the model
const Post = mongoose.model('Post', postSchema);
module.exports = Post;