require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 8000;
const app = express();
const routes = require('./server/routes');
const db = require('./server/models');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/src'));
}

app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`🌎  ==> Server is listening on PORT ${PORT}!`);
  });
});
