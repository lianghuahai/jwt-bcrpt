var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('random number')
    var a = new Array();
    for(var j=0; j<=10000;j++){
        var str = '';

        for(var i = 0; i < 6; i += 1){
        str += Math.floor(Math.random() * 10);
        }
        a.push(str);
    }
    for(var k=0; k<=10000;k++){
        if(a[k].length!=6){
            console.log(a[k]+',!!!!!!!!!!!!!')
        }else{
            console.log(a[k].length)
        }
        
    }

  });








module.exports = router;







