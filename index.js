const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const keys = require('./config');
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

app.listen(process.env.PORT || 4000);
