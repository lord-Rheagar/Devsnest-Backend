var express = require('express');
var router = express.Router();
const path = require('path')

/* GET users listing. */
router.get('/file/:filename', (req,res)=>{
  const filename = req.params.filename
  console.log(filename)


  res.sendFile(path.join(__dirname,`../public/images/${filename}`),'image.jpeg')
})
router.get('/file', (req,res)=>{
    res.send("File will be sent")
})

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
