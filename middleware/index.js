const Blog = require('../models/blog');


module.exports = {
    isLoggedIn: function(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        req.flash('error', 'You must be signed in to do that!');
        res.redirect('/login');
    },  
    checkUserBlog: function(req, res, next){
    Blog.getBlogById(req.params.id, function(err, foundBlog){
      if(err || !foundBlog){
          console.log(err);
          req.flash('error', 'Sorry, that blog does not exist!');
          res.redirect('admin');
      } else {
          req.blog = foundBlog;
          next();
        //   res.redirect('/admin/' + req.params.id);
      }
    });
  }
}

