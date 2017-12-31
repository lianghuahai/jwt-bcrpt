var express = require('express');
var router = express.Router();
var multer  = require('multer')
var path = require('path')
//var upload = multer({ dest: 'uploads/' })

//  THis is to upload sigle/mutiple image

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'cloudinary://173729895748223:pNOoawZpvRagUtm5xBHGtS3AWwI@dijpdqnkj')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
  })
  
var upload = multer({
     storage: storage ,
    limits:{fileSize :100000000000},
    fileFilter:function (req, file, cb) {
        checkFileType(file,cb)
    }
})
function checkFileType(file,cb){
    console.log('1')
    const filetypes=/jpeg|jpg|png|gif/;
    const extname =  filetypes.test(path.extname(file.originalname).toLowerCase())
    console.log('2')
    const mimetype= filetypes.test(file.mimetype)
    console.log('3')
    console.log(extname)
    console.log(mimetype)
    if(extname && mimetype){
        return cb(null,true)
    }else{
        cb(new Error('Image only!'))
    }
}

var uploadone = multer({
    storage: storage ,
   limits:{fileSize :100000000000},
   fileFilter:function (req, file, cb) {
       checkFileType(file,cb)
   }
}).single('myimage1')
router.post('/mutifile', upload.any(), function (req, res, next) {
    console.log("uploading files!")
        
          res.send(req.files)
})


router.post('/singlefile',  function (req, res, next) {
    console.log("uploading files!")
    uploadone(req, res, function (err) {
        if (err) {
            console.log("uploading files failed!")
          // An error occurred when uploading
          return
        }
        // Everything went fine
        res.send(req.file)
      })
})








module.exports = router;