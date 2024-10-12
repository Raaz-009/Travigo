const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  travelPlan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TravelPlan',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  tags: [String]
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);