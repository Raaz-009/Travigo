const TravelPlan = require('../models/TravelPlan');

// @desc    Create a new travel plan
// @route   POST /api/travel-plans
// @access  Private
exports.createTravelPlan = async (req, res) => {
  try {
    const { destination, startDate, endDate, hotel, activities, totalBudget } = req.body;
    
    const newTravelPlan = new TravelPlan({
      user: req.userId, // This will be set by the auth middleware
      destination,
      startDate,
      endDate,
      hotel,
      activities,
      totalBudget
    });

    const savedTravelPlan = await newTravelPlan.save();
    res.status(201).json(savedTravelPlan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get a specific travel plan
// @route   GET /api/travel-plans/:id
// @access  Private
exports.getTravelPlan = async (req, res) => {
  try {
    const travelPlan = await TravelPlan.findById(req.params.id);
    if (!travelPlan) {
      return res.status(404).json({ message: 'Travel plan not found' });
    }
    if (travelPlan.user.toString() !== req.userId) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    res.json(travelPlan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get all travel plans for a user
// @route   GET /api/travel-plans
// @access  Private
exports.getUserTravelPlans = async (req, res) => {
  try {
    const travelPlans = await TravelPlan.find({ user: req.userId });
    res.json(travelPlans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update a travel plan
// @route   PUT /api/travel-plans/:id
// @access  Private
exports.updateTravelPlan = async (req, res) => {
  try {
    let travelPlan = await TravelPlan.findById(req.params.id);
    if (!travelPlan) {
      return res.status(404).json({ message: 'Travel plan not found' });
    }
    if (travelPlan.user.toString() !== req.userId) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const { destination, startDate, endDate, hotel, activities, totalBudget } = req.body;
    travelPlan = await TravelPlan.findByIdAndUpdate(
      req.params.id,
      { destination, startDate, endDate, hotel, activities, totalBudget },
      { new: true }
    );
    res.json(travelPlan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete a travel plan
// @route   DELETE /api/travel-plans/:id
// @access  Private
exports.deleteTravelPlan = async (req, res) => {
  try {
    const travelPlan = await TravelPlan.findById(req.params.id);
    if (!travelPlan) {
      return res.status(404).json({ message: 'Travel plan not found' });
    }
    if (travelPlan.user.toString() !== req.userId) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    await travelPlan.remove();
    res.json({ message: 'Travel plan removed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};