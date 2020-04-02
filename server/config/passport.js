const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const jwtConfig = require("./jwt");

const initPassport = (app, User) => {
  const options = {
    secretOrKey: jwtConfig.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  };
  const verify = (payload, done) => {
    User.findById(payload.id)
      .then(user => done(null, user || false))
      .catch(done);
  };
  const strategy = new JwtStrategy(options, verify);
  passport.use(strategy);
  app.use(passport.initialize());
};

const authenticate = () => passport.authenticate("jwt", { session: false });

module.exports = {
  initPassport,
  authenticate
};
