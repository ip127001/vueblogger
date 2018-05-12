const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
var passport = require('passport');
require('../config/passport')(passport);

//load post model
require('../models/Post');
const Post = mongoose.model('posts');

router.get('/posts', passport.authenticate('jwt', { session: false}), (req, res) => {
    var token = getToken(req.headers);
    if (token) {
        Post.find({})
        .sort({date: 'desc'})
        .then(datas => {
            res.send(datas)
        })
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

router.get('/posts/edit/:id', passport.authenticate('jwt', { session: false}), (req, res) => {
    var token = getToken(req.headers);
    if(token) {
        Post.findOne({
            _id: req.params.id
        })
        .then(data => {
            res.send(data)
        })
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
})

router.post('/posts/add', passport.authenticate('jwt', { session: false}), (req, res) => {
    const token = getToken(req.headers);
    if (token) {
        new Post(req.body)
        .save()
        .then(data => {
            res.send('ok')
        })  
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});


router.put('/posts/add/:id', passport.authenticate('jwt', { session: false}), (req, res) => {
    const token = getToken(req.headers);
    if (token) {
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
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

router.delete('/posts/delete/:id', (req, res) => {
    Post.remove({ _id: req.params.id })
    .then(res => {
        console.log(res)
    })
})

getToken = function (headers) {
    if (headers && headers.authorization) {
      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
};

module.exports = router;
