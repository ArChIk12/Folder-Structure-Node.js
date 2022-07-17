const mongoose = require("mongoose");
//get the schema
const Schema = mongoose.Schema;
//create new schema
const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  followers: Array,
  followings: Array,
});

module.exports = mongoose.model("User", UserSchema);
