const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema will define the structure of the documents that we will store
// the model wraps around this

// create new schema now

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
        },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps:true});

// model name is important will look for it
// will automatically look for blogs name in db atlas
// singular of the collection name ==> will change it automatically to blogs
const Blog = mongoose.model('Blog',blogSchema);
module.exports = Blog;