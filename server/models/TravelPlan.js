const mongoose = require('mongoose');

const TravelPlanSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  hotel: {
    name: String,
    address: String,
    pricePerNight: Number
  },
  activities: [{
    name: String,
    date: Date,
    price: Number
  }],
  totalBudget: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('TravelPlan', TravelPlanSchema);