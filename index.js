const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
if(process.env.NODE_ENV === 'production'){
  // CONNECT TO PRODUCTION DB USING MLAB
  mongoose.connect(keys.mongoURI);
}else{
  // CONNECT TO DEVELOPMENT DB ON LOCAL MACHINE
  mongoose.connect('mongodb://localhost/emaily');
}
require('./models/user');
require('./services/passport');
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// Use Heroku env/port(prod) OR 5000(dev)
app.listen(process.env.PORT || 5000);
