var express = require('express');
var router = express.Router();
var usertb= require('../dbConfig/userTable');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log("get");
    console.log("register");
    console.log(req.body.username);
    console.log(req.body.password);
    res.send('ok');
});

router.post('/', function(req, res, next) {
    console.log("coming login");
    var username = req.body.username;
    // var id = req.body._id;
    usertb.find({username:username},function (err, data) {
        if (err) return console.error(err);
        if(data.length>0){
          if(bcrypt.compareSync(req.body.password,data[0].password)){
            res.json({token: jwt.sign({ username: data.username, _id: data._id}, 'RESTFULAPIs')});
          }else{
            res.send('Password is not correct');
          }
        }else{
          res.send('User doesnt exit');
        }
      })

    
});
router.post('/checklogin', function(req, res, next) {
    console.log("checklogin");
    console.log(req.body.username);
    console.log(req.body.password);
    res.send('ok');
});


router.post('/findCommentById', function(req, res, next) {
    console.log("coming findCommentById");
    var id = req.body._id;
    Kitten.findById(id).exec((err,data)=>{
       res.json(data)
    })
});
router.post('/deleteComment', function(req, res, next) {
  console.log("coming deleteComment");
    var id = req.body.id;
    Kitten.remove({_id: id}).exec((data)=>{
      res.json(data)
    })
});
router.post('/queryComment', function(req, res, next) {
  console.log("queryComment");
    Kitten.find().exec((err, data) => {
      res.json(data)
  })
});

router.post('/updateComment', function(req, res, next) {
  console.log("updateComment");
  var _id = req.body._id;
  var author = req.body.author;
  var comment = req.body.comment;
    Kitten.update({_id:_id},{author:author,comment:comment}).exec((err,data)=>{
      res.json(data)
    })
});








module.exports = router;