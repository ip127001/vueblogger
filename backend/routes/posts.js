const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

//load post model
require('../models/Post');
const Post = mongoose.model('posts');

router.get('/posts', (req, res) => {
    Post.find({})
    .sort({date: 'desc'})
    .then(datas => {
        res.send(datas)
    })
});

router.post('/posts/add', (req, res) => {
    new Post(req.body)
    .save()
    .then(data => {
        res.send('ok')
    })
});

module.exports = router;