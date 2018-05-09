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

router.get('/posts/edit/:id', (req, res) => {
    Post.findOne({
        _id: req.params.id
    })
    .then(data => {
        res.send(data)
    })
})

router.post('/posts/add', (req, res) => {
    new Post(req.body)
    .save()
    .then(data => {
        res.send('ok')
    })
});


router.put('/posts/add/:id', (req, res) => {
    Post.findOne({
        _id: req.params.id
    })
    .then(post => {
        post.title = req.body.title;
        post.description = req.body.description;
        new Post(post)
        .save()
        .then(data => {
            console.log(data)
        })
    })    
});

router.delete('/posts/delete/:id', (req, res) => {
    Post.remove({ _id: req.params.id })
    .then(res => {
        console.log(res)
    })
})

module.exports = router;