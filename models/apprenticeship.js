let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ApprenticeshipSchema = new Schema({
   company: String,
   city: String,
   url: String,
   description: String,
   user_created: { type: Schema.ObjectId, ref: 'User' }
});

let Apprenticeship = mongoose.model('Apprent', ApprenticeshipSchema );

module.exports  = Apprenticeship;