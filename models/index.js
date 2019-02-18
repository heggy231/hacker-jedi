const mongoose = require('mongoose');

const db = mongoose.connection;

// Update your database connection to point to Heroku's database. mongoose.connect method
mongoose.connect(process.env.MONGODB_URI  || 'mongodb://localhost/jedi-db', { useNewUrlParser: true });

db.once('open', function() {
  console.log('db is now open.');
});

// model/index.js must require all files under models since index.js
module.exports = {
  Apprenticeship : require("./apprenticeship.js"),
}