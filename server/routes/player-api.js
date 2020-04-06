const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../utils/authenticate");

// import auth from '../../middleware/auth';
const {
  OK,
  CREATED,
  BAD_REQUEST,
  NOT_FOUND
} = require('../utils/responseStatus');

// import Player Model
const Player = require("../models/Player");

const JWT_SECRET = process.env.SECRET
const router = Router();

// ROUTES


module.exports = router;