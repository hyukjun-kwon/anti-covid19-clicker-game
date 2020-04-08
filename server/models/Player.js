const { Schema, model } = require("mongoose");

const PlayerSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  easyscore: {
    type: Number,
  },
  mediumscore: {
    type: Number,
  },
  hardscore: {
    type: Number,
  },
});

const Player = model("player", PlayerSchema);

module.exports = Player;
