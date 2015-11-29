var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET user page.*/
router.get('/u/:user', function(req, res, next) {
  res.render('user',{})
});

/* GET publish page.*/
router.post('/post', function(req, res, next) {
  res.render('post',{})
});

/* GET register page.*/
router.get('/reg', function(req, res, next) {
  res.render('reg',{title:"用户注册"})
});
/* GET doRegister page.*/
router.post('/reg', function(req, res, next) {
  //检验用户两次输入的口令是否一致
  if( req.body['password-repeat'] != req.body['password'])
  {
	  req.flash('error',"两次输入的口令不一致！") 
	  return res.redirect('/reg');
  }
  
});

/* GET login page.*/
router.get('/login', function(req, res, next) {
  res.render("")
});
/* GET doLogin page.*/
router.post('/login', function(req, res, next) {
  res.render('doLogin',{})
});
/* GET logout page.*/
router.post('/logout', function(req, res, next) {
  res.render('logout',{})
});

module.exports = router;
