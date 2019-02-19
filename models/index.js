
    const mongoose = require('mongoose');

    const db = mongoose.connection;

    mongoose.connect(process.env.MONGODB_URI  || 'mongodb://localhost/jedi-db', { useNewUrlParser: true });

    db.once('open', function() {
        console.log('db is now open.');
      });


module.exports = {
  User: require('./user.js'),
  Apprenticeship: require('./apprenticeship.js')
};

