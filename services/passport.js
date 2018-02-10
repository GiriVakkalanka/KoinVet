const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  //proxy: true config option for redirect URI HTTPS to work
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {

      //console.log('access token ', accessToken);
      //console.log('refresh token ', refreshToken);
      //console.log('profile:', profile);

      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: '/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'email'],
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      //console.log('access token ', accessToken);
      //console.log('refresh token ', refreshToken);
      console.log('profile:', profile);

      const existingUser = await User.findOne({ facebookId: profile.id });

      if(existingUser) {
        //console.log(existingUser);
        return done(null, existingUser);
      }


      const user = await new User({ facebookId: profile.id }).save();
      //console.log(user);
      done(null, user);

    }
  )
);

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.twitterConsumerKey,
      consumerSecret: keys.twitterConsumerSecret,
      callbackURL: 'auth/twitter/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ twitterId: profile.id });

      if(existingUser) {
        //console.log(existingUser);
        return done(null, existingUser);
      }


      const user = await new User({ twitterId: profile.id }).save();
      //console.log(user);
      done(null, user);

    }
  )
)
