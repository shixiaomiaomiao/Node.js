var express = require('express');
var router = express.Router();
var util = require("util");
var users = {
	'shixiaomiao':{
		name: "miao",
		website : "www.baidu.com"
	}
	
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.all('/user/:username', function(req, res, next) {
  console.log("All methods captured!");
  if (users[req.params.username]) {
	  next();
  }
  else
  {
	  next(new Error(req.params.username + 'does not exist.'))
  }
});

router.get('/user/:username',function(req,res,next) {
	res.send(JSON.stringify(users[req.params.username]));
})

router.put('/user/:username',function(req,res,next) {
	res.send("Done!");
})

module.exports = router;
