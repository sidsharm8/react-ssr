const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
 username: String,
 password: String,
 sortPreference : String
});

userSchema.methods.verifyPassword = function(password){
  return password === this.password;
};
module.exports = mongoose.model("User", userSchema);
