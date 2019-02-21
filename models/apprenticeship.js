const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApprenticeshipSchema = new Schema({
   company: String,
   city: String,
   url: String,
   description: String,
   duration: String,
   email: String,
   user_created: { type: Schema.ObjectId, ref: 'User' }
});

const Apprenticeship = mongoose.model('Apprenticeship', ApprenticeshipSchema );
module.exports  = Apprenticeship;

