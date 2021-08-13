const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;