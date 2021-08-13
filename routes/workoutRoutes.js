// Importing express and setting the router variable to express' router function
// Importing our models folder and setting it to a db variable
const router = require('express').Router();
const db = require('../models');

// API get request for workouts
// Aggregates the sum of the durations of exercises
router.get('/workouts', (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }
    ])
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// API get request for workouts over a 7 day range
// Aggregates the sum of the durations of exercises
router.get('/workouts/range', (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }
    ])
    .sort({ day: -1 })
    .limit(7)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// API post request for workouts when creating a new workout
router.post('/workouts', (req, res) => {
    db.Workout.create({})
        .then (response => {
            res.status(200).json(response);
        })
        .catch (err => {
            res.status(500).json(err);
        });
});

// API put request for workouts by ID when updating an existing workout
router.put('/workouts/:id', (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, {
        $push: {
            exercises: req.body
        }
    },
    {
        new: true,
        runValidators: true
    })
    .then (response => {
        res.status(200).json(response);
    })
    .catch (err => {
        res.status(500).json(err);
    })
});

// Exporting the router variable
module.exports = router;