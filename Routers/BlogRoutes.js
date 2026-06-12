const express = require("express");
const router = express.Router();
const { getAllBlogs, createBlog, deleteBlog, updateBlog } = require("../Controllers/BlogController");

router.get("/", getAllBlogs);
router.post("/post", createBlog);
router.delete("/:id", deleteBlog);
router.put("/:id", updateBlog);

module.exports = router;
