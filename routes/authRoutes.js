const passport = require('passport');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Application = mongoose.model('application');
const User = mongoose.model('users');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      //console.log(res);
      res.redirect('/sensei_application/expertise');
    }
  );

  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', {
      scope: ['email']
    })
  );

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook'),
    (req, res) => {
      res.redirect('/sensei_application/expertise');
    }
  );

  app.get('/auth/linkedin', passport.authenticate('linkedin'), (req, res) => {
    console.log('Shouldnt be called');
  });

  app.get(
    '/auth/linkedin/callback',
    passport.authenticate('linkedin'),
    (req, res) => {
      res.redirect('/sensei_application/expertise');
    }
  );

  app.get('auth/twitter', passport.authenticate('twitter'));

  app.get(
    '/auth/twitter/callback',
    passport.authenticate('twitter'),
    (req, res) => {
      res.redirect('/sensei_application/expertise');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.post('/api/submit_application', requireLogin, async (req, res) => {
    //console.log('hi');
    //const { links, expertise } = req.body;
    console.log(req.body);
    const expertise = req.body[0];
    const links = req.body[1];

    const application = new Application({
      expertise,
      links,
      userRecord: req.user,
      _user: req.user.id,
      dateCreated: Date.now()
    });

    try {
      await application.save();
      res.send(application);
      //console.log(item);
    } catch (err) {
      res.status(400).send(err);
    }
  });

  app.post('/api/save_expertise_choices', requireLogin, async (req, res) => {
    const choices = req.body;
    console.log(choices);
    const userRecord = await User.findOne({ _id: req.user.id });
    userRecord.expertise = choices;
    const updatedUser = await userRecord.save();
    console.log(updatedUser);
    res.send(updatedUser);
  });

  app.post(
    '/api/save_specialization_choices',
    requireLogin,
    async (req, res) => {
      const specializationChoices = req.body;
      console.log(specializationChoices);

      const userRecord = await User.findOne({ _id: req.user.id });
      userRecord.specialization = specializationChoices;
      const updatedUser = await userRecord.save();
      console.log(updatedUser);
      res.send(updatedUser);
    }
  );
};
