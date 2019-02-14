const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Shop = new Schema({
    shop_owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    shopnumber:{
        type:String,
        require:true
    },
    shopname:{
        type:String,
        require:true
    },
    shopcathegory:{
        type:String,
        require:true
    },
    shoppics:{
        type:String,
        require:true
    }
})

module.exports= mongoose.model('Shop',Shop);