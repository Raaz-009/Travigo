const express = require('express');
const router = express.Router();
const { createTravelPlan, getTravelPlan, getUserTravelPlans, updateTravelPlan, deleteTravelPlan } = require('../controllers/travelPlanController');
const auth = require('../middleware/auth');
// TODO: Import auth middleware once it's created
// const auth = require('../middleware/auth');

// POST /api/travel-plans
router.post('/',auth, createTravelPlan);

// GET /api/travel-plans/:id
router.get('/:id',auth, getTravelPlan);

// GET /api/travel-plans
router.get('/',auth, getUserTravelPlans);

// PUT /api/travel-plans/:id
router.put('/:id',auth, updateTravelPlan);

// DELETE /api/travel-plans/:id
router.delete('/:id',auth, deleteTravelPlan);

module.exports = router;