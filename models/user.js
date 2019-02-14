const mongoose = require ('mongoose');
const Schema =  mongoose.Schema
const bcrypt = require('bcrypt');
const User = new Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    creationDate:{
        type:Date,
        default:Date.now(),
        require:true
    }
});

User.statics.hashPassword = hashPassword = (password)=>{
    return bcrypt.hashSync(password,10)
}

User.methods.isValid =(hashedpassword)=>{
    return bcrypt.compareSync(hashedpassword,this.password)
}

module.exports= mongoose.model('User',User)


