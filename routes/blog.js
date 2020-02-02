const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const {isLoggedIn} = require('../middleware/index');
// const buf = Buffer.from('', 'base64');
// const middle = require('../middleware/routehandler');
// const fs = require('fs');
// const adminTemplate = require('../views/admin');
// const editTemplate = require('./../views/edit');
// const newTemplate = require('./../views/new');

//INDEX - show all BLOGS


router.get('/', async (req, res, next) => {
    const blogs = await Blog.getAll(); {

    }
    res.render(adminTemplate({ blogs }));
});

// router.get("/", middle(async (req, res, next){
 
//         // Get all campgrounds from DB
//         Blog.find({}, function(err, allBlogs){
//            if(err){
//                console.log(err);
//            } else {
//               if(req.xhr) {
//                 res.json(allBlogs);
//               } else {
//                 res.render("blogs",{blogs: allBlogs, page: 'blogs'});
//               }
//            }
//     });
// });
//CREATE BLOG

router.get('/admin/new', (req, res) => {
    res.send(newTemplate({}));
});




// router.post("/", isLoggedIn, function(req, res){
//     // get data from form and add to campgrounds array
//     const { title, article, author } = req.body;
//     const image =req.file.buffer.toString('base64');
//     const desc = req.body.description;
//     const article = req.body.article;
//     const author = {
//         id: req.user._id,
//         username: req.user.username
//     }
//       const newBlog = {title: title, image: image, description: desc, author:author, article:article};
//       buf.toString({image: image}, 'base84');
//       // Create a new campground and save to DB
//       Blog.create(newBlog, function(err){
//           if(err){
//               console.log(err);
//           } else {
//               //redirect back to campgrounds page
//               console.log("You added a new blog !");
//             //   res.redirect("/");
//           }
//     });
//  });


 //
// EDIT - shows edit form for a blog

router.get('/admin/:id/edit', async (req, res) => {
    const blog = await Blog.getOne(req.params.id);

    if(!blog){
        return  res.send('Blog Not Found');
    }

    res.send(editTemplate({ blog }));
});


router.post('/admin/:id/edit', 
    // upload.single('image'),
    // handleErrors(editTemplate, async (req) => {
    //     const blog = await Blog.getOne(req.params.id);
    //     return { blog };
    // }),
    async (req, res) => {
      const changes = req.body;
      
      if(req.file){
          changes.image = req.file.buffer.toString('base64')
      }
      try{
          middle(await Blog.update(req.params.id, changes)
          )} catch (err) {
        return res.send('Could not find post');
      }
      res.redirect('/admin/');
    }
);

router.post('/admin/:id/delete',async (req, res) => {
    await Blog.delete(req.params.id)

    res.redirect('/admin')
});



// router.get(":id/edit",  function(req, res){
//     //render edit template with that blog
 
//     res.render("/edit", {blog: req.blog});
//   });
  
//   // PUT - updates campground in the database
//   router.put("/:id", function(req, res){
//       var newData = {title: req.body.title, image: req.body.image, description: req.body.description, author: req.body.author, article: req.body.article};
//       Blog.findByIdAndUpdate(req.params.id, {$set: newData}, function(err, blog){
//           if(err){
//               req.flash("error", err.message);
//               res.redirect("back");
//           } else {
//               req.flash("success","Successfully Updated!");
//               res.redirect("/admin/" + blog._id);
//           }
//       })
//     });


//DELETE
// router.get("/delete/:id", function(req, res) {
//     // Remove a note using the objectID
//     req.blog.remove(
//       {
//         _id: blog.ObjectID(req.params.id)
//       },
//       function(error, removed) {
//         // Log any errors from mongojs
//         if (error) {
//           console.log(error);
//           res.send(error);
//         }
//         else {
//           // Otherwise, send the mongojs response to the browser
//           // This will fire off the success function of the ajax request
//           console.log(removed);
//           res.send(removed);
//         }
//       }
//     );
//   });

  router.delete("/:id",function(req, res) {
    Blog.remove({
      _id: {
        $in: req.blog._id
      }
    }, function(err) {
      if(err) {
          req.flash('error', err.message);
          res.redirect('/');
      } else {
          req.campground.remove(function(err) {
            if(err) {
                req.flash('error', err.message);
                return res.redirect('/');
            }
            req.flash('error', 'Blog deleted!');
            res.redirect('/admin');
          });
      }
    })
});




module.exports = router;