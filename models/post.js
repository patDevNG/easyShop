const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    title:{
        type:String,
        require:true,
    },
    body:{
        type:String,
        require:true,
    },
    creationDate:{
        type:Date,
        default:Date.now(),
        require:true,
    }
})

module.exports = mongoose.model('Post',Post);