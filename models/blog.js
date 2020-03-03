const mongoose = require('mongoose');



const blogSchema = new mongoose.Schema({
    title: String,
    image:     { type: Buffer, required:true },
    imageType:{ type: String, required:true },
    description: String,
    article: String,
    createdAt: {type: Date, default: Date.now },
    author: String,
     username: String
    
});

blogSchema.virtual('imagePath').get(function() {
    if (this.image != null && this.imageType != null) {
      return `data:${this.imageType};charset=utf-8;base64,${this.image.toString('base64')}`
    }
  })

const Blog = module.exports = mongoose.model("Blog", blogSchema);

module.exports.getBlogs = function (callback, limit) {
    Blog.find(callback).limit(limit);
}


// Get Blog
module.exports.getBlogById = function (id, callback) {
    Blog.findById(id, callback);
}

// Add Blog
module.exports.addBlog = function (blog, callback) {
    Blog.create(blog, callback);
}

// Update Blog
module.exports.updateBlog = function (id, blog, options, callback) {
    var query = {_id: id};
    var update = {
        title: blog.title,
        article: blog.article,
        description: blog.description,
        author: blog.author,
        image:blog.image
    }
    Blog.findOneAndUpdate(query, update, options, callback);
}

// Delete Blog
module.exports.removeBlog = function (id, callback) {
    var query = {_id: id};
    Blog.deleteOne(query, callback);
}