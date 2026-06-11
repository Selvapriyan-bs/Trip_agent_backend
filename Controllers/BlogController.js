const Blog = require("../Models/BlogModel");

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ date: -1 });
    res.status(200).json({
      message: "Blogs found",
      count: blogs.length,
      data: blogs,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching blogs", error: err.message });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, category, readTime, date, summary, image, featured, content } = req.body;
    if (!title) {
      return res.status(400).json({ success: false, message: "Title is required" });
    }
    const newBlog = new Blog({ title, category, readTime, date, summary, image, featured, content });
    const saved = await newBlog.save();
    res.status(201).json({ success: true, message: "Blog created", data: saved });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error creating blog", error: err.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error deleting blog", error: err.message });
  }
};

module.exports = { getAllBlogs, createBlog, deleteBlog };
