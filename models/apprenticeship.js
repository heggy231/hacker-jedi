let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ApprenticeshipSchema = new Schema({
   company: String,
   city: String,
   url: String,
   description: String,
   user_created: { type: Schema.ObjectId, ref: 'User' }
});

// name of the database
let Apprenticeship = mongoose.model('Apprenticeship', ApprenticeshipSchema );

module.exports  = Apprenticeship;