const router = require('express').Router();
const db = require('../models');

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

router.post('/workouts', (req, res) => {
    db.Workout.create({})
        .then (response => {
            res.status(200).json(response);
        })
        .catch (err => {
            res.status(500).json(err);
        });
});

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

module.exports = router;