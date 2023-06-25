const Post = require("../models/postModel");

// * Returns all post
const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    console.log("Posts: ", posts);

    return res.status(200).json({
      status: true,
      data: posts
    })
  } catch (err) {
    console.log("getAllPosts Error : ", err);
    return res.status(500).json({
      status: true,
      data: []
    })
  }
}

// * Returns single post
const getPost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id)
    console.log("post: ", post);

    return res.status(200).json({
      status: true,
      data: post
    })
  } catch (err) {
    console.log("getPost Error : ", err);
    return res.status(500).json({
      status: true,
      data: []
    })
  }
}

// * create new post
const createPost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body);
    return res.status(200).json({
      status: true,
      data: post
    })
  } catch (err) {
    console.log("createPost Error : ", err);
    return res.status(500).json({
      status: false,
      data: []
    })
  }
}

// * Update a post
const updatePost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const post = await Post.findByIdAndUpdate(id, req.body, {
      runValidators: true
    })
    return res.status(200).json({
      status: true,
      data: post
    })
  } catch (err) {
    console.log("updatePost Error : ", err);
    return res.status(500).json({
      status: false,
      data: []
    })
  }
}

// * Delete a post
const deletePost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const post = await Post.findByIdAndDelete(id)
    return res.status(200).json({
      status: true,
      data: post
    })
  } catch (err) {
    console.log("deletePost Error : ", err);
    return res.status(500).json({
      status: false,
      data: []
    })
  }
}

module.exports = {
  getPost,
  getAllPosts,
  createPost,
  updatePost,
  deletePost
}