const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const keys = require('./keys/keys');
const passport = require('passport');
const app = express();
if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
} else {
  mongoose.connect(keys.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
}

require('./models/User');
require('./models/Info');
require('./services/passport');
const User = mongoose.model('User');
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 100,
    keys: [keys.secretKeys]
  })
);
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoute')(app);
require('./routes/mainRoute')(app);
if (process.env.NODE_ENV === 'production') {
  //Express will serve up the production assets
  app.use(express.static(__dirname + '/client/build'));
  //Express will serve up the index.html if
  //it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(process.env.PORT || 4000);
