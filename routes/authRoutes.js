const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    // kills cookie
    req.logout();
    // send empty user
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    // After a user goes through oauth flow, we will send back a response of the user we grabbed in passport
    res.send(req.user);
  })

};
