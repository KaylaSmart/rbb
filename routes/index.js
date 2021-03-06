const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
// const multer = require('multer');

//index
router.get('/', function(req, res){
    res.render('home');
});


router.get('/about', function(req, res){
    res.render('about');
});

router.get('/thegals', function(req, res){
    res.render('about');
});

router.get('/podcast', function(req, res){
    res.render('pod');
});

// router.get('/blog', function(req, res){
//     res.render('blogs');
// });


router.get('/secret', function(req, res){
    res.render('secret');
});




//SHOW SIGNUP FORM
//==================
router.get("/signup",function(req, res){
    res.render("signup", {page: 'signup'}); 
 });

//handle signup logic
 router.post('/signup', (req,res, next) =>{
    // req.body.username
    // req.body.password
    User.register(new User({username:req.body.username}), req.body.password, function(err){
            if(err){
                console.log(err);
            }
            passport.authenticate("local")(req, res, function(){
                res.send("you have signed up!"); 
             });
        });
});


// =======
// ========SHOW LOGIN FORM -- LOGIN ROUTE==============
router.get("/login", (req, res)=>{
    res.render("login", {user:req.user, message: req.flash('error')});
});
 
//==============HANDLE LOGIN LOGIC======== 
router.post("/login", passport.authenticate("local",
 {  
    successRedirect:"/admin",
    failureRedirect: "/login", 
    failureFlash: true,
    successFlash: 'Welcome to RBB Blog!'
 }), function(req, res){  
});


//===================================================
//LOGOUT ROUTE

router.get('/logout', function(req,res){
    req.logout();
    res.redirect('/login');
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

module.exports = router;