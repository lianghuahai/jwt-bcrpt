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
    cloudinary.uploader.upload("myimage1-1514751254148.jpg", function(result) { 
        console.log(result) 
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