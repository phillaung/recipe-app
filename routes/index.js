var express = require('express');
var router = express.Router();
var ensureLoggedIn = require('../config/ensureLoggedIn')
var passport = require('passport')
var indexCtrl = require('../controllers/index');

/* GET home page. */
router.get('/', indexCtrl.index);

router.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
    })
);

router.get(
    '/oauth2callback',
    passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/',
    })
);

router.get('/logout', function (req, res) {
    req.logout(function () {
        res.redirect('/');
    });
});

module.exports = router;
