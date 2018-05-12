const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')

const app = express();

const posts = require('./routes/posts');
const users = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

//connect to mongoose
mongoose.connect('mongodb://localhost/posts')
.then(() => console.log('mongodb connected'))
.catch((error) => console.log(error));

const port = 8081;

app.use('', posts);
app.use('/auth', users);

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});