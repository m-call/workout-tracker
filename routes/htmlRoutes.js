// Importing express and setting the router variable to express' router function
// Importing path to be able to navigate between HTML routes
const router = require('express').Router();
const path = require('path');

// Routes the user to the homepage which is index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Routes the user to the stats page which is stats.html
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

// Routes the user to the exercise page which is exercise.html
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

// Exporting the router variable
module.exports = router;