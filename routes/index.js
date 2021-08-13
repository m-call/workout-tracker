// Importing express and setting the router variable to express' router function
// Importing our HTML routes and workout API routes
const router = require('express').Router();
const workoutRoutes = require('./workoutRoutes');
const htmlRoutes = require('./htmlRoutes');

// Setting the router to use /api as our route for workoutRoutes when we do API requests
// Setting the router to use our htmlRoutes file
router.use("/api", workoutRoutes);
router.use(htmlRoutes);

// Exporting the router variable
module.exports = router;