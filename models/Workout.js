// Importing mongoose and creating a Schema variable from mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// The Workout Schema which consists of two keys: day and exercises
// Day contains a type of Date and defaults to the current time and date
// Exercises consists of an array with keys for each of the different values that
// could be entered by the user when they enter a new workout
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Type of exercise is required!"
            },
            name: {
                type: String,
                trim: true,
                required: "Name of exercise is required!"
            },
            distance: {
                type: Number,
                min: 1
            },
            duration: {
                type: Number,
                min: 1,
                required: "Duration of exercise is require!"
            },
            weight: {
                type: Number,
                min: 1
            },
            reps: {
                type: Number,
                min: 1
            },
            sets: {
                type: Number,
                min: 1
            }
        }
    ]
});

// Setting a Workout variable to the Schema so that it can be exported
const Workout = mongoose.model("Workout", WorkoutSchema);

// Exporting the Workout Schema
module.exports = Workout;