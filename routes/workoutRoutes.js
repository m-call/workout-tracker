const router = require('express').Router();
const db = require('../models');

router.get('/workouts', (req, res) => {
    db.Workout.find({})
        .then (response => {
            res.status(200).json(response);
        })
        .catch (err => {
            res.status(500).json(err);
        });
});

router.post('/workouts', ({ body }, res) => {
    db.Workout.create(body)
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
        new: true
    })
});

module.exports = router;