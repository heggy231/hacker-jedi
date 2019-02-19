const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   name: String,
   //lastName: String,
   email: String,
   company: String
});

const User = mongoose.model('User', UserSchema );
module.exports = User;  
