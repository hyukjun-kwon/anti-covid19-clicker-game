const bcrypt = require("bcrypt");
const mongoose = require("../config/mongoose");

const SALT_ROUNDS = 8;

const { Schema } = mongoose;
const { Types } = Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.pre("save", function() {
  if (!this.isModified("password")) {
    return Promise.resolve();
  }
  if (this.password.length < 8) {
    return Promise.reject(
      new Error("Password must be 8 characters or more")
    );
  }
  return bcrypt.hash(this.password, SALT_ROUNDS).then(hash => {
    this.password = hash;
  });
});

userSchema.methods.verifyPassword = function(password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;