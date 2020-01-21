const layout = require('../layout');

module.exports = ({ blogs }) => {
    const renderedBlogs = blogs.map((blog) =>  {
        return` 
        <tr>
            <td> ${blog.title}</td>
            <td> ${blog.author}</td>
            <td> ${blog.article}</td>
            <td>
          <a href="/admin/blogpost/${blog.id}/edit">
            <button class="button is-link">
              Edit
            </button>
          </a>
            </td>
            <td>
            <form method="POST" action="/admin/blogpost/${blog.id}/delete">
              <button class="button is-danger">Delete</button>
             </form>
            </td>
        </tr>
            `
            ;
    }).join('');

    return layout({
        content: `
        <div class="control">
        <h1 class="subtitle">Blog Post</h1>  
        <a href="/admin/blogpost/new" class="button is-primary">New Blog</a>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Post</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          ${renderedBlogs}
        </tbody>
      </table>
         `
    });
};
