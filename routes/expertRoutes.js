const mongoose = require('mongoose');
const User = mongoose.model('users');
const Request = mongoose.model('requests');
const Review = mongoose.model('reviews');
const Rating = mongoose.model('ratings');
const requireLogin = require('../middlewares/requireLogin');

//set price
//accept request
//end session
//get requests
//add verticals

module.exports = app => {

  app.post('/api/accept_request', requireLogin, async (req, res) => {
    const { requestId } = req.body;

    try {
      const acceptedRequest = await Request.findOne({ _id: requestId });
      acceptedRequest.accepted = true;
      acceptedRequest.dateAccepted = Date.now();
      await acceptedRequest.save();

      const newSession = new Session({
        _expert: acceptedRequest._expert,
        _client: acceptedRequest._client,
        vertical: acceptedRequest.vertical,
        dateStarted: Date.now();
      })

      const savedSession = newSession.save();
      res.send(savedSession);

    } catch (err) {
      res.status(400).send(err);
    }

  });


};
