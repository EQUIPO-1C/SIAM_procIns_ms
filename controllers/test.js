const Post = require('../models/post')

exports.getTest = (req, res, next) => {
  // return array of existing posts
  Post.find().then(foundPosts => {
    res.json({
      message: "You are connected",
    });
  }).catch(err => console.log('err', err));
}
