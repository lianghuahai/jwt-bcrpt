var express = require('express');
var router = express.Router();
var usertb= require('../dbConfig/userTable');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
router.post('/', function(req, res, next) {
    console.log("register");
    usertb.find({username:req.body.username},function (err, data) {
        if (err) return console.error(err);
        console.log(data);
        if(data.length>0){
            res.send('username already exist');
        }else{
            var body = new usertb({
                username: req.body.username,
                password: req.body.password   
            })
            body.password = bcrypt.hashSync(req.body.password, 10);
            body.save((err, data) => {
                res.send(data);
                // res.send('register ok');
            })
        }
      })
});




module.exports = router;