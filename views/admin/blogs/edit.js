const  { getError } = require('../../helpers');
const layout = require('../layout');


module.exports = ({ blog, errors }) => {
    return layout({
    content:  `

  <h1 class="subtitle">Edit a Post</h1>
  <form  method="POST" enctype="multipart/form-data" class="main pt-5">
  <div class="form-group ">
    <div class="col-10">
      <label for="exampleFormControlInput1">Title</label>
      <input value="${
        blog.title
      }" class="input" placeholder="Title" name="title">
      <p class="help is-danger">${getError(errors, 'title')}</p> 
    </div>
  </div>

  <div class="form-group">
    <div class="col-12">
      <label for="exampleFormControlTextarea1">Article</label>
      <textarea class="form-control" id="article" rows="10">${blog.article}</textarea>
      ${getError(errors, 'article')}
      <p class="help is-danger">${getError(errors, 'article')}</p> 
    </div>
  </div>
  <div class="field mb-5">
    <label class="label">Image</label>            
    <input type="file" name="image"  value="${blog.image}"/>
  </div>
  <button class="button btn bg-primary">Submit Edit</button>
</form>

    ` });
};


