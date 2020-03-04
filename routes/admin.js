const express = require('express');
// const fs = require('fs');
const router = express.Router();
const Blog = require('../models/blog');
const {isLoggedIn, checkUserBlog} = require('../middleware/index');
// const middle = require('../middleware/routehandler');
// const buffer = Buffer.from('',10);
const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']




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
// router.post("/" ,function(req, res){

//   // var 
//   // var desc = req.body.description;
//   // var author = req.body.author;
//   // var article = req.body.article;
//    var image = JSON.stringify(req.body.image);
//   // var newBlog = {title: title, description: desc, author:author, article:article, image:image};
//   const newBlog = new Blog({
//     title:req.body.title,
//     desc: req.body.description,
//     author:  req.body.author,
//     article: req.body.article,
//     image: image
//   }
  
//   )

//   // Create a new campground and save to DB
//     Blog.create(newBlog, function(err){
//       saveImage(newBlog, image)
//        if(err){
//             console.log(err);
//         } else {
//             //redirect back to campgrounds page
//             console.log('New blog entry!');
//             res.redirect("admin");
//         }
//     })

//  function saveImage( newBlog , imageEncoded){
//   if(imageEncoded == null) return
//    const image = JSON.stringify(imageEncoded)
//   if(image != null && imageMimeTypes.includes(image.type)) {
//     newBlog.image = new Buffer.from(image.data, 'base64')
//     newBlog.imageType = image.type
//   }
// }
// ;
//   });


// Create Book Route
router.post('/', async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    author: req.body.author,
    createdAt: new Date(req.body.publishDate),
    description: req.body.description,
    article: req.body.article
  })
  saveBlogImage(blog, req.body.image)
  const newBlog = await Blog.create(blog)
  try {
      res.redirect(`admin/${newBlog.id}`)
     
  } catch {
    console.log(err)
    // renderNewPage(res, blog, true)
  }
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




function saveBlogImage(blog, imageEncoded) {
  if (imageEncoded == null) return
  const image = JSON.parse(imageEncoded)
  if (image != null && imageMimeTypes.includes(image.type)) {
    blog.blogImage = new Buffer.from(image.data, 'base64')
    blog.blogImageType = image.type
  }
}




module.exports = router;






