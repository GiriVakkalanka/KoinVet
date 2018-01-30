const mongoose = require('mongoose');
const User = mongoose.model('users');
const Request = mongoose.model('requests');
const Review = mongoose.model('reviews');
const Rating = mongoose.model('ratings');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.get('/api/get_all_experts', async (req, res) => {
    const experts = await User.find({ type: 1 });
  });

  //make request
  app.post('/api/make_request', requireLogin, async (req, res) => {
    const { _expert, vertical, details } = req.body;

    const request = new Request({
      _expert,
      vertical,
      details,
      _client: req.user.id,
      dateSent: Date.now()
    });

    try {
      const savedRequest = await request.save();
      res.send(savedRequest);
    } catch (err) {
      res.status(400).send(err);
    }
  });

  app.post('/api/leave_review', requireLogin, async (req, res) => {
    const { _expert, vertical, review } = req.body;

    const reviewRecord = new Review({
      _expert,
      vertical,
      review,
      _client: req.user.id,
      date: Date.now()
    });

    try {
      const savedReview = await review.save();
      res.send(savedReview);
    } catch (err) {
      res.status(400).send(err);
    }
  });

  app.post('/api/leave_rating', requireLogin, async (req, res) => {
    const { _expert, vertical, rating } = req.body;

    const ratingRecord = new Rating({
      _expert,
      vertical,
      rating,
      _client: req.user.id,
      date: Date.now()
    });

    try {
      const savedRating = await rating.save();
      res.send(savedRating);
    } catch (err) {
      res.status(400).send(err);
    }
  });
};
