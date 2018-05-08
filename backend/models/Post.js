const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('posts', PostSchema);