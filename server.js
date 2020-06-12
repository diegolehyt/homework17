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
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://user1:password1@ds119489.mlab.com:19489/heroku_cq6llj7m', { useNewUrlParser: true });

// Import models (workout)
const db = require("./models");

// Import Routes 
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// app Listener
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// mongodb://user1:password1@ds119489.mlab.com:19489/heroku_cq6llj7m
// mongodb://localhost/workout