const mongoose = require('mongoose')
const {Schema,model}= mongoose;
 const validator= require('validator')
 const bcrypt = require("bcrypt");
const clientsSchema= new Schema({
    name:{
        type:String,
        required:[true,'The client must has a name']
    },
    email:{
        type:String,
        unique:true,
        validate:[validator.isEmail,'Please provide us a valid email!']
    },
    phone:{
        type:Number,
        unique:true,
        required:[true,'The client must has the number phone']
    },
    password:{
        type:String,
        required:[true,'The client must has the number phone']
    }


})
clientsSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();
    this.password= await bcrypt.hash(this.password,12)
    next();
})
const clients=model('clients',clientsSchema);
module.exports=clients
