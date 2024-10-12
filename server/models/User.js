const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  travelPlans: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TravelPlan'
  }]
});

module.exports = mongoose.model('User', UserSchema);