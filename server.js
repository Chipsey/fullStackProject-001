const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

const app = express();

//DB Config
const db = require('./config/keys').mongoURI;
app.get('/', (req, res) => res.send('Hello world!'));

//Connect to mongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected!!'))
    .catch(err => console.log('MongoDB not Connected!!'));

//Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


const port = process.env.port || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));