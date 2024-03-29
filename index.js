const express = require('express');
//const algoliasearch = require('algoliasearch');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/Users');
require('./models/Survey');
require('./models/Rating');
require('./models/Link');
require('./models/Review');
require('./models/Session');
require('./models/Request');
require('./services/passport');
require('./models/Application');
require('./models/Window');

mongoose.connect(keys.mongoURI);
//const client = algoliaSearch(keys.)

const app = express();

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);
require('./routes/clientRoutes')(app);
require('./routes/expertRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
