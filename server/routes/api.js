const router = require('express').Router();
const axios = require('axios');

// example call:
// http://localhost:8000/api?q=cats
// the param "q" gets passed down and added with its value to the url that axios calls
router.route('/').get((req, res) => {
  axios
    .get(
      `http://pixabay.com/api?key=${
        process.env.PIXABAY_KEY
      }&category=animals&safesearch=true`,
      {
        params: {
          q: req.query.q
        }
      }
    )
    .then(({ data }) => res.json(data))
    .catch((err) => res.status(422).json(err));
});

module.exports = router;
