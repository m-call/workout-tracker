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

module.exports = router;