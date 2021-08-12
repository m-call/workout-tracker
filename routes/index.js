const router = require('express').Router();
const workoutRoutes = require('./workoutRoutes');
const htmlRoutes = require('./htmlRoutes');

router.use("/api", workoutRoutes);
router.use(htmlRoutes);

module.exports = router;