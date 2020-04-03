const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.SECRET;
const {
  UNAUTHORIZED
} = require("./responseStatus");

module.exports = (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check for token
  if (!token)
    return res.status(UNAUTHORIZED).json({ 
      msg: 'Access Denied - Token not found' 
    });

  try {
    // Verify token
    const verifiedToken = jwt.verify(token, JWT_SECRET);

    // Add user from payload
    req.user = verifiedToken;

    next();
  } catch (err) {
    res.status(BAD_REQUEST).json({ msg: 'Unverified Token' });
  }
};