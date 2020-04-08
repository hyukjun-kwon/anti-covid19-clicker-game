const { Router } = require("express");
const authenticate = require("../utils/authenticate");

// import auth from '../../middleware/auth';
const { OK, NOT_FOUND } = require("../utils/responseStatus");

// import Player Model
const Player = require("../models/Player");
const router = Router();

// ROUTES
// Route: "/player/easyScore", "/player/mediumScore", "/player/hardScore"
// Type: POST
// Middleware: Token verification
// Posts the scores after verifying the token for validity
router.post("/easyScore", authenticate, async (req, res) => {
  try {
    const player = await Player.updateOne(
      { username: req.body.player.username },
      { $set: { easyscore: req.body.score } }
    );

    res.status(OK);
  } catch (err) {
    res.status(NOT_FOUND).json({ msg: err.message });
  }
});

router.post("/mediumScore", authenticate, async (req, res) => {
  try {
    const player = await Player.updateOne(
      { username: req.body.player.username },
      { $set: { mediumscore: req.body.score } }
    );

    res.status(OK);
  } catch (err) {
    res.status(NOT_FOUND).json({ msg: err.message });
  }
});

router.post("/hardScore", authenticate, async (req, res) => {
  try {
    const player = await Player.updateOne(
      { username: req.body.player.username },
      { $set: { hardscore: req.body.score } }
    );

    res.status(OK);
  } catch (err) {
    res.status(NOT_FOUND).json({ msg: err.message });
  }
});

module.exports = router;
