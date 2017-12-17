const mongoose = require('./mongooseConfig');

const userSchema = mongoose.Schema({
    username: String,
    password : String
 },{
   versionKey: false
 });
 var User = mongoose.model('User', userSchema);
 
 module.exports=User;