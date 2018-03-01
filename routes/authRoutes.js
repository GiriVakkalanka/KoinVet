const passport = require('passport');
//const algoliasearch = require('algoliasearch');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Application = mongoose.model('application');
const User = mongoose.model('users');
const Window = mongoose.model('window');
const keys = require('../config/keys');
const algoliasearch = require('algoliasearch');
const client = algoliasearch(keys.algoliaClientID, keys.algoliaClientSecret);
const index = client.initIndex('KoinVetDev');

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

    index.saveObject(updatedUser, function(err, content) {
      if (err) {
        console.log(err);
      }
      console.log(content);
    });
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

      index.saveObject(updatedUser, function(err, content) {
        if (err) {
          console.log(err);
        }
        console.log(content);
      });

      res.send(updatedUser);
    }
  );

  app.post('/api/save_link_choices', requireLogin, async (req, res) => {
    const linkChoices = req.body;
    console.log(linkChoices);

    const userRecord = await User.findOne({ _id: req.user.id });
    userRecord.links = linkChoices;
    const updatedUser = await userRecord.save();
    console.log(updatedUser);

    index.saveObject(updatedUser, function(err, content) {
      if (err) {
        console.log(err);
      }
      console.log(content);
    });

    res.send(updatedUser);
  });

  app.post('/api/save_time_window', requireLogin, async (req, res) => {
    const timeWindow = req.body;
    const dateStartObj = new Date(timeWindow.date);
    const timeStartObj = new Date(timeWindow.startTime);
    const timeEndObj = new Date(timeWindow.endTime);
    const windowRecord = new Window({
      dateCreated: Date.now(),
      startDate: dateStartObj,
      startTime: timeStartObj,
      endTime: timeEndObj
    });
    await windowRecord.save();

    const userWanted = await User.findOne({ _id: req.user.id });
    userWanted.windows.push(windowRecord);
    const updatedUser = await userWanted.save();
    console.log(timeWindow);
    res.send(updatedUser);
  });

  app.post('/api/save_rate', requireLogin, async (req, res) => {
    console.log('route called');
    const newRate = req.body;
    console.log(newRate);

    const userRecord = await User.findOne({ _id: req.user.id });
    userRecord.rate = newRate.rate;
    const updatedUser = await userRecord.save();
    console.log(updatedUser);
    index.saveObject(updatedUser, function(err, content) {
      if (err) {
        console.log(err);
      }
      console.log(content);
    });
    res.send(updatedUser);
  });

  app.post('/api/save_info', requireLogin, async (req, res) => {
    console.log('route called');
    const info = req.body;
    console.log(info);

    const userRecord = await User.findOne({ _id: req.user.id });
    userRecord.description = info.description;
    userRecord.city = info.city;
    userRecord.country = info.country;
    const updatedUser = await userRecord.save();
    console.log(updatedUser);
    index.saveObject(updatedUser, function(err, content) {
      if (err) {
        console.log(err);
      }
      console.log(content);
    });
    res.send(updatedUser);
  });
};
