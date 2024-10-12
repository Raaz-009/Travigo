const BlogPost = require('../models/BlogPost');

// @desc    Create a new blog post
// @route   POST /api/blog-posts
// @access  Private
exports.createBlogPost = async (req, res) => {
  try {
    const { title, content, travelPlan, tags } = req.body;
    
    const newBlogPost = new BlogPost({
      title,
      content,
      author: req.userId, // This will be set by the auth middleware
      travelPlan,
      tags
    });

    const savedBlogPost = await newBlogPost.save();
    res.status(201).json(savedBlogPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get a specific blog post
// @route   GET /api/blog-posts/:id
// @access  Public
exports.getBlogPost = async (req, res) => {
  try {
    const blogPost = await BlogPost.findById(req.params.id).populate('author', 'name');
    if (!blogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json(blogPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get all blog posts
// @route   GET /api/blog-posts
// @access  Public
exports.getAllBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find().populate('author', 'name').sort({ createdAt: -1 });
    res.json(blogPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update a blog post
// @route   PUT /api/blog-posts/:id
// @access  Private
exports.updateBlogPost = async (req, res) => {
  try {
    let blogPost = await BlogPost.findById(req.params.id);
    if (!blogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    if (blogPost.author.toString() !== req.userId) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const { title, content, tags } = req.body;
    blogPost = await BlogPost.findByIdAndUpdate(
      req.params.id,
      { title, content, tags },
      { new: true }
    );
    res.json(blogPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete a blog post
// @route   DELETE /api/blog-posts/:id
// @access  Private
exports.deleteBlogPost = async (req, res) => {
  try {
    const blogPost = await BlogPost.findById(req.params.id);
    if (!blogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    if (blogPost.author.toString() !== req.userId) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    await blogPost.remove();
    res.json({ message: 'Blog post removed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};