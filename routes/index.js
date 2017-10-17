var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/logout.html', function(req, res, next) {
  res.render('logout', {});
});

router.get('/main.html', function(req, res, next) {
  res.render('main', {});
});

router.get('/about.html', function(req, res, next) {
  res.render('about', {});
});

router.get('/qrCode.html', function(req, res, next) {
  res.render('qrCode', {});
});

router.get('/packageDetails.html', function(req, res, next) {
  res.render('packageDetails', {});
});

router.get('/attractions.html', function(req, res, next) {
  res.render('attractions', {});
});

router.get('/specialEvents.html', function(req, res, next) {
  res.render('specialEvents', {});
});

router.get('/recommended.html', function(req, res, next) {
  res.render('recommended', {});
});

router.get('/lepak.html', function(req, res, next) {
  res.render('lepak', {});
});

router.get('/emergencyContacts.html', function(req, res, next) {
  res.render('emergencyContacts', {});
});

module.exports = router;
