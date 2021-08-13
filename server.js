// Importing the necessary modules to set up the server
const express = require('express');
const mongoose = require('mongoose');

// Setting up express as an app to be able to use it
// Setting up the port for the server
const app = express();
const PORT = process.env.PORT || 3001;

// Setting up express app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Making sure the app is able to access our routes
app.use(require('./routes'));

// Setting up the connection for mongoose to have our database connected to our express server
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Console logs the port the app is running on when the server starts up properly
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
