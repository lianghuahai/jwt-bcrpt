var express = require('express');
var router = express.Router();
var cloudinary = require('cloudinary');
cloudinary.config({ 
    cloud_name: 'dijpdqnkj', 
    api_key: '173729895748223', 
    api_secret: 'pNOoawZpvRagUtm5xBHGtS3AWwI' 
  });
   
  
  
router.get('/',  function (req, res, next) {
    console.log('11')
    var url = req.body.image//myimage1
    cloudinary.uploader.upload("3f44393cd038fc5ddcfb4fa6830bacc5.jpg", function(result) { 
        console.log(result)
        var imageUrl = result.url; 
      });
    //   cloudinary.uploader.upload("/public/images/myimage1-1514751254148.jpg", {tags: 'express_sample'})
    //   .then(function (image) {
    //     console.log('** file uploaded to Cloudinary service');
    //     console.dir(image);
    //     photo.image = image;
    //     // Save photo with image metadata
    //     return photo.save();
    //   })
    //   .then(function (photo) {
    //     console.log('** photo saved')
    //   })
    //   .finally(function () {
    //     res.render('photos/create_through_server', {photo: photo, upload: photo.image});
    //   });

})













module.exports = router;