const express = require('express');
const router = express.Router();
const { createBlogPost, getBlogPost, getAllBlogPosts, updateBlogPost, deleteBlogPost } = require('../controllers/blogPostController');
// TODO: Import auth middleware once it's created
const auth = require('../middleware/auth');

// POST /api/blog-posts
router.post('/',auth, createBlogPost);

// GET /api/blog-posts/:id
router.get('/:id',auth, getBlogPost);

// GET /api/blog-posts
router.get('/', getAllBlogPosts);

// PUT /api/blog-posts/:id
router.put('/:id', updateBlogPost);

// DELETE /api/blog-posts/:id
router.delete('/:id',auth, deleteBlogPost);

module.exports = router;