const express = require("express");
const path = require("path");
require("dotenv").config();
const jwt = require("./config/jwt");
const { User } = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { initPassport, authenticate } = require("./config/passport");
initPassport(app, User);

app.post("/auth/login", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username })
    .then(user => {
      if (user) {
        return user.verifyPassword(password).then(isVerified => {
          if (isVerified) {
            const jwtPayload = { id: user.id };
            return res.json({ token: jwt.sign(jwtPayload) });
          }
          return Promise.reject();
        });
      }
      return Promise.reject();
    })
    .catch(error => {
      res.status(401).send("Unauthorized");
    });
});

app.post("/api/users", (req, res) => {
  const { username, password } = req.body;
  User.create({ username, password })
    .then(user => res.end())
    .catch(error => {
      const DUPLICATE_KEY_ERROR_CODE = 11000;
      const { name, code, path } = error;
      if (name === "MongoError" && code === DUPLICATE_KEY_ERROR_CODE) {
        res
          .status(400)
          .send("Email invalid or account already exists.");
      }
      if (name === "ValidationError") {
        res.status(400).send("Invalid email or password format.");
      }
      if (name === "Error" && error.message) {
        res.status(400).send(error.message);
      }
      res.status(500).end();
    });
});

app.get("/api/users/:id", authenticate(), (req, res) => {
  // prevent logged in user from accessing other user accounts
  if (req.user.id !== req.params.id) {
    return res.status(401).send("Unauthorized");
  }
  return User.findById(req.params.id).then(user => {
    if (user) {
      return res.json({ user });
    }
    return res.status(402).send("User not found");
  });
});

// Serve static assets in production only
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.listen(PORT, () => {
  console.log(`Server Running at ${PORT}`);
});