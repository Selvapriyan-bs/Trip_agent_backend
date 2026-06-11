const express = require("express");
const router = express.Router();
const { getAllBlogs, createBlog, deleteBlog } = require("../Controllers/BlogController");

router.get("/", getAllBlogs);
router.post("/post", createBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
