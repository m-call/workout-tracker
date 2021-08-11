const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    title: String,
    body: String
});

const Workout = mongoose.model("Workout", WorkoutSchema);

const db = {Workout: Workout};

module.exports = db;