const express = require('express');
const app = express();
const router = express.Router();
const auth = require('../../middleware/auth');
const Post = require('../../models/Post');
const User = require('../../models/User');
const validatePostsInput = require('../../validation/posts');
const multer = require('multer');
const {
  v4: uuidv4
} = require('uuid');
const path = require('path');

const DIR = "./public/image/"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DIR);
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

let upload = multer({
  storage,
  fileFilter
});

// @route    GET api/posts
// @desc     Get all posts
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({
      date: -1
    });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route    GET api/posts
// @desc     Get user by token
// @access   Private
router.route('/').post(upload.single('image'), (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const image = req.file.filename;
  const tag = req.body.tag;

  const newPostData = {
    title,
    content,
    tag,
    image
  }
  // console.log(newUserData);
  const newPost = new Post(newPostData);


  newPost.save()
    .then((post) => { res.json(post); })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;