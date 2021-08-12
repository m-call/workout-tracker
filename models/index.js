const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Workout = mongoose.model("Workout", WorkoutSchema);

const db = {Workout: Workout};

module.exports = db;