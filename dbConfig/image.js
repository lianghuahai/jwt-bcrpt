const mongoose = require('./mongooseConfig');

const imageSchema = mongoose.Schema({
    title      : { type : String, length   : 255 },
    image      : { type : JSON}
 },{
   versionKey: false
 });
 var User = mongoose.model('image', imageSchema);
 
 module.exports=User;