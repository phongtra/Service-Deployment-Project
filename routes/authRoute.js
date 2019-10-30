const passport = require('passport');

module.exports = app => {
  app.get('/api/current_user', async (req, res) => {
    res.send(req.user);
  });
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] })
  );
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/');
    }
  );
  app.get('/api/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
  });
};
