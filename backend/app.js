const express = require('express');
const mongoose = require('mongoose');

const app = express();

//connect to mongoose
mongoose.connect('mongodb://localhost/posts')
.then(() => console.log('mongodb connected'))
.catch(() => console.log(error));

//load post model
require('./models/Post');
const Post = mongoose.model('posts');

const port = 5050;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});