// Require Models
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Server Port
const PORT = process.env.PORT || 3000;

// Express app instance 
const app = express();

// Require middlewares 
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// mongoose connection 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// Import models (workout)
const db = require("./models");

// Import Routes 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// app Listener
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

