var mongoose = require('mongoose');
mongoose.Promise = global.Promise;  
mongoose.connect('mongodb://admin:123@ds259175.mlab.com:59175/class2',{useMongoClient: true,});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("MongoDB we're connected!");
});

module.exports=mongoose