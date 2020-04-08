const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.SECRET;
const { BAD_REQUEST, UNAUTHORIZED } = require("./responseStatus");

module.exports = (req, res, next) => {
  console.log(req.body);

  const token = req.body.token;

  // // Check for token
  if (!token)
    return res.status(UNAUTHORIZED).json({
      msg: "Access Denied - Token not found",
    });

  try {
    // Verify token
    const verifiedToken = jwt.verify(token, JWT_SECRET);

    // Add user from payload
    req.user = verifiedToken;

    next();
  } catch (err) {
    res.status(BAD_REQUEST).json({ msg: "Unverified Token" });
  }
  next();
};
