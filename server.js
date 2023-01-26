const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to mongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected!!'))
    .catch(err => console.log('MongoDB not Connected!!'));


//Passport middleware
app.use(passport.initialize());

//passport config
require('./config/passport')(passport);

//Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


const port = process.env.port || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));