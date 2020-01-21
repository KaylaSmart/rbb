const Repository = require('./repository');

class BlogRepository extends Repository {}


module.exports = new BlogRepository('blogs.json');