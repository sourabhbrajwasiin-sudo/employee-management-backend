const mongoose=require('mongoose')

const Schema=new mongoose.Schema({

    id:String,

    name:String,

    price:String,

    rating:String,

    review:String,

    desc:String,

    img:String,

    category:String,

})

const products=mongoose.model('product',Schema)

module.exports=products;