var express = require('express');
var router = express.Router();
var app = express();
var views = app.get('views');
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(views+'/event.html')
});

module.exports = router;
