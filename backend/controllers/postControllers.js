import Post from "../models/postModel.js";
import User from "../models/userModel.js";
import { v2 as cloudinary } from "cloudinary";

const createPost = async (req, res) => {
  try {
    const text = req.body.text;
    const postedBy = req.body.postedBy;
    let img = req.body.img;

    if (!text || !postedBy) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }

    const user = await User.findById(postedBy);

    if (user._id.toString() !== req.user._id.toString())
      return res.status(401).json({ error: "Unauthorised to create a post" });

    const maxLength = 1000;
    if (text.length > maxLength) {
      return res.status(400).json({
        error: `Text must be at most ${maxLength} characters long`,
      });
    }

    if (img) {
      const uploadedResponse = await cloudinary.uploader.upload(img);
      img = uploadedResponse.secure_url;
    }

    const newPost = new Post({ postedBy, text, img });

    await newPost.save();

    res.status(201).json({ message: "Post created successfully", newPost });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in createPost: ", err.message);
  }
};

const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json({ post });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in getPost: ", err.message);
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    if (post.postedBy.toString() !== req.user._id.toString()) {
      return res.status(401).json({ error: "Unauthorized to delete post" });
    }

    await Post.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in deletePost: ", err.message);
  }
};

const likePost = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const userId = req.user._id;

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ error: "Post not found" });
    const userLikedPost = post.likes.includes(userId);
    if (userLikedPost) {
      /* UNLIKE */
      await Post.updateOne({ _id: postId }, { $pull: { likes: userId } });
      res.status(200).json({ message: "Post unliked successfully" });
    } else {
      /* LIKE */
      post.likes.push(userId);
      await post.save();
      res.status(200).json({ message: "Post liked successfully" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in likePost: ", err.message);
  }
};

const replyToPost = async (req, res) => {
  try {
    const { text } = req.body;
    const postId = req.params.id;
    const userId = req.user._id;
    const userProfilePic = req.user.profilePic;
    const username = req.user.username;

    if (!text) return res.status(400).json({ error: "Text field is required" });

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ error: "Post not found" });

    const reply = { userId, text, userProfilePic, username };
    post.replies.push(reply);

    await post.save();
    res.status(200).json({ message: "Post added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in replyToPost: ", err.message);
  }
};

const getFeedPosts = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    const following = user.following;

    const feedPosts = await Post.find({ postedBy: { $in: following } }).sort({
      createdAt: -1,
    });
    res.status(200).json(feedPosts);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(`Error in get feed posts: ${err.message}`);
  }
};

export { createPost, getPost, deletePost, likePost, replyToPost, getFeedPosts };
