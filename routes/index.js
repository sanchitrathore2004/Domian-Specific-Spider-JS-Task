var express = require('express');
var router = express.Router();
const userModel = require('./users');
const passport = require('passport');
const localStrategy = require('passport-local');
passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', loggedIn: req.isAuthenticated() });
});

router.get('/select_ingredients', function(req, res, next) {
  res.render('selection', { loggedIn: req.isAuthenticated() });
});

router.get('/saved_recipies', function(req, res, next) {
  res.render('savedrecipies', { loggedIn: req.isAuthenticated() });
});

router.get('/recipies', function(req, res, next) {
  res.render('recipies', { loggedIn: req.isAuthenticated() });
});

router.get('/loginform', function(req, res, next) {
  res.render('login', { loggedIn: req.isAuthenticated() });
});

router.get('/registerform', function(req, res, next) {
  res.render('register', { loggedIn: req.isAuthenticated() });
});

router.get('/publish', function (req,res,next){
  res.render('publish', { loggedIn: req.isAuthenticated() });
});

router.post('/register', function(req, res, next) {
  var userdata = new userModel({
    username: req.body.username,
    secret: req.body.secret
  });

  userModel.register(userdata, req.body.password)
    .then(function(registerduser) {
      passport.authenticate('local')(req, res, function() {
        res.redirect('/');
      });
    });
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/loginform'
}), function(req, res) {});

router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) return next(err);
    res.redirect('/loginform');
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

module.exports = router;
