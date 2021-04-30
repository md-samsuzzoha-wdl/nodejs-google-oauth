const express = require('express');
const passport = require('passport');
const { ensureAuth, ensureGuest } = require('../middleware/auth');

const router = express.Router();


router.get('/', ensureGuest, (req, res, next) => {
    res.render('login');
});



router.get('/google',
    passport.authenticate('google', { scope: ['profile'] }));




router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/auth' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/dashboard');
    });


router.get('/logout',  (req, res, next) => {
    req.logout();
    res.redirect('/auth');
});

module.exports = router;