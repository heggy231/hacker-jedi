const mongoose = require('mongoose');

const db = mongoose.connection;

// Update your database connection to point to Heroku's database. mongoose.connect method
mongoose.connect(process.env.MONGODB_URI  || 'mongodb://localhost/jedi-db', { useNewUrlParser: true });

db.once('open', function() {
  console.log('db is now open.');
});

module.exports = {
  User: require('./user.js'),
  Apprenticeship: require('./apprenticeship.js')
};
