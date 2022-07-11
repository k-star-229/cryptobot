const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type : Schema.Types.ObjectId
    },
    image: {
        type: String,
        required : true
    },
    title: {
        type: String,
        required : true
    },
    content: {
        type: String,
        required : true
    },
    tag: {
        type: String,
        required : true
    },
    date: {
        type: Date,
        default : Date.now
    }
}); 

module.exports = mongoose.model('post', PostSchema);