let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let User = require('./user');

let ApprenticeshipSchema = new Schema({
   company: String,
   city: String,
   url: String,
   description: String,
   user_created: { type: Schema.Types.ObjectId, ref: 'User' }
});

// name of the database is inside of mongoose.model('NameOfDB') = 'Apprenticeship'
const Apprenticeship = mongoose.model('Apprenticeship', ApprenticeshipSchema );
module.exports = Apprenticeship;
