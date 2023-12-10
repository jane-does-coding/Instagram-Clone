import Post from "../models/postModel.js";
import User from "../models/userModel.js";

const createPost = async (req, res) => {
  try {
    const { postedBy, text, img } = req.body;

    if (!text || !postedBy) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const user = await User.findById(postedBy);

    if (user._id.toString() !== req.user._id.toString())
      return res.status(401).json({ message: "Unauthorised to create a post" });

    const maxLength = 1000;
    if (text.length > maxLength) {
      return res.status(400).json({
        message: `Text must be at least ${maxLength} characters long`,
      });
    }

    const newPost = new Post({ postedBy, text, img });

    await newPost.save();

    res.status(201).json({ message: "Post created successfully", newPost });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in createPost: ", err.message);
  }
};

export { createPost };
