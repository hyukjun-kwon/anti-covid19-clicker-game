const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// import authenticate middleware from 'server/utils/authenticate';
const authenticate = require("../utils/authenticate");

const {
  OK,
  CREATED,
  BAD_REQUEST,
  NOT_FOUND,
} = require("../utils/responseStatus");

// import Player Model
const Player = require("../models/Player");

const JWT_SECRET = process.env.SECRET;
const router = Router();

// Route: "/auth/login"
// Type: POST
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check for invalid inputs
    if (!username) throw Error("Username cannot be empty");
    if (!password) throw Error("Password cannot be empty");

    // Find Player
    const player = await Player.findOne({ username });
    if (!player) throw Error("Player Not Registered.");

    // Compare the password
    const isValidPassword = await bcrypt.compare(password, player.password);
    if (!isValidPassword) throw Error("Username and password does not match.");

    const token = jwt.sign({ id: player._id }, JWT_SECRET, { expiresIn: "1d" });
    if (!token) throw Error("Token was not created.");

    // If all the above passed: valid Login
    // respond with OK and return jwt
    res.status(OK).json({
      token,
      player: {
        id: player._id,
        username: player.username,
        easyscore: player.easyscore,
        mediumscore: player.mediumscore,
        hardscore: player.hardscore,
      },
    });
  } catch (err) {
    // If error is thrown in try block, catch and return error message
    res.status(BAD_REQUEST).json({ msg: err.message });
  }
});

// Route: "/auth/register"
// Type: POST
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check for invalid inputs
    if (!username) throw Error("Username cannot be empty");
    if (!password) throw Error("Password cannot be empty");

    // Find Player
    const player = await Player.findOne({ username });
    if (player) throw Error("Player with same username already exist.");

    const salt = await bcrypt.genSalt(6);
    if (!salt) throw Error("bcrypt error: Salt not generated.");

    const bcryptedPassword = await bcrypt.hash(password, salt);
    if (!bcryptedPassword) throw Error("Password encryption failed.");

    const newPlayer = new Player({
      username,
      password: bcryptedPassword,
      easyscore: 0,
      mediumscore: 0,
      hardscore: 0,
    });

    const saved = await newPlayer.save();
    if (!saved) throw Error("Player not saved");

    const token = jwt.sign({ id: saved._id }, JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(CREATED).json({
      token,
      player: {
        id: saved.id,
        username: saved.username,
        easyscore: saved.easyscore,
        mediumscore: saved.mediumscore,
        hardscore: saved.hardscore,
      },
    });
  } catch (err) {
    res.status(BAD_REQUEST).json({ error: err.message });
  }
});

// Route: "/auth/user/:id"
// Type: GET
// Middleware: Token verification
router.get("/player/:id", authenticate, async (req, res) => {
  try {
    // Find player by _id
    const player = await Player.findById(req.params.id);
    if (!player) throw Error("Player not found in the database");

    res.json(player);
  } catch (err) {
    res.status(NOT_FOUND).json({ msg: err.message });
  }
});

module.exports = router;
