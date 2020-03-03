const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const {isLoggedIn, checkUserBlog} = require('../middleware/index');
// const middle = require('../middleware/routehandler');
// const buffer = Buffer.from('',10);




//INDEX - show all BLOGS

router.get("/",

 function(req, res){
  // Get all campgrounds from DB
  Blog.find({},  function(err, allBlogs){
     if(err){
         console.log(err);
     } else {
        if(req.xhr) {
          res.json(allBlogs);
        } else {
          res.render("blogs",{blogs: allBlogs, page: 'blogs'});
        }
     }
})
});




module.exports = router;