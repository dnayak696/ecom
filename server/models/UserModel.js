const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);


export  default User;