 const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
  return layout({
    content:
     `
       <form  method="POST" enctype="multipart/form-data" class="main pt-5">
        <div class="form-group ">
          <div class="col-10">
            <label for="exampleFormControlInput1">Title</label>
            <input type="text" class="form-control title" id="title" placeholder="Blog Title"> 
            <p class="help is-danger">${getError(errors, 'title')}</p> 
          </div>
        </div>
        <div class="form-group">
          <div class="col-10">
          <label for="exampleFormControlInput1">Author</label>
          <input type="text" class="form-control" id="author" placeholder="Name">
          </div>     
        </div>

        <div class="form-group">
          <div class="col-12">
            <label for="exampleFormControlTextarea1">Article</label>
            <textarea class="form-control" id="article" rows="10"></textarea>
            ${getError(errors, 'article')}
            <p class="help is-danger">${getError(errors, 'article')}</p> 
          </div>
        </div>
        <div class="field mb-5">
          <label class="label">Image</label>            
          <input type="file" name="image" />
        </div>
        <button class="button btn bg-primary">Create New Post</button>
      </form>  

    `
 });
};