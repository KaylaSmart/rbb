const express = require('express');
const fs = require('fs');
const router = express.Router();
const Blog = require('../models/blog');
const {isLoggedIn, checkUserBlog} = require('../middleware/index');
// const middle = require('../middleware/routehandler');
// const buffer = Buffer.from('',10);
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });



//INDEX - show all campgrounds
router.get("/", function(req, res){

      // Get all campgrounds from DB
      Blog.find({}, function(err, allBlogs){
         if(err){
             console.log(err);
         } else {
            if(req.xhr) {
              res.json(allBlogs);
            } else {
              res.render("admin",{blogs: allBlogs, page: 'admin'});
            }
         }
      });
  });




//NEW - show form to create new campground
router.get("/new", function(req, res){
   res.render("new"); 
});

//CREATE - add new Blog to DB
router.post("/", upload.single('image') ,function(req, res){

  var title = req.body.title;
  var desc = req.body.description;
  var author = req.body.author;
  var article = req.body.article;
  var newBlog = {title: title, description: desc, author:author, article:article};

  // Create a new campground and save to DB
    Blog.create(newBlog, function(err){
       if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            console.log('New blog entry!');
            res.redirect("admin");
        }
    });
  });



// SHOW - shows more info about one campground-COME BACK FOR THIS!!!
router.get("/:id", function(req, res){
    //find the blog with provided ID
    Blog.findById(req.params.id),(function(err, foundBlog){
        if(err || !foundBlog){
            console.log(err);
            req.flash('error', 'Sorry, that blog does not exist!');
            return res.redirect('/blogs');
        }
        console.log(foundBlog)
        //render show template with that campground
        res.render("blogs/show", {blog: foundBlog});
    });
});

// EDIT - shows edit form for a campground
router.get("/:id/edit",checkUserBlog, function(req, res){
  Blog.getBlogById(req.params.id);
  //render edit template with that campground
  res.render("edit", { blog: req.blog});
});

// PUT - updates campground in the database
router.put("/:id", checkUserBlog, function(req, res){
  const changes = req.body;
    Blog.findByIdAndUpdate(req.params.id, {$set:changes}, function(err){
      if(req.file){
        changes.image = req.file.buffer.toString('base64')
      }else if(err){
            req.flash("error", err.message);
            // res.redirect("back");
        } else {
            req.flash("success","Successfully Updated!");
            res.redirect("/admin");
        }
    });
});

// DELETE - removes campground and its comments from the database
router.delete("/:id",  function(req, res) {

    Blog.removeBlog(req.params.id, function(err) {
      if(err) {
        req.flash("error", err.message);
      } else {
            res.redirect("/admin");
            
      }
    })
});
module.exports = router;






