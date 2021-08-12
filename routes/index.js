const express = require('express');
const router = express.Router();
const workoutRoutes = require('./workoutRoutes');
const htmlRoutes = require('./htmlRoutes');

router.use("/api", workoutRoutes);
router.use(htmlRoutes);

module.exports = router;