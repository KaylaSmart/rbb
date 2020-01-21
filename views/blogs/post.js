const layout = require('../layout');

module.exports = ({ blogs }) => {
  const renderedBlogs = blogs.map((blog) =>{
    return layout({
        content:` 
<hr>
<div class="container-fluid">
    <div class="container d-flex">
    <div class="row">
        <div class="col" >
            <img src="${blog.img}" alt="" class="mb-2 ">
            <div class="col  w-100 blog-main">
               
                <div class="blog-postt">
                  <h2 class="blog-post-title">${blog.title}</h2>
                  <p class="blog-post-meta">by ${blog.author}</p>
          
                  <p>${blog.article}</p>
                </div>
        </div>
        </div>
        <aside class="col-md-4 blog-sidebar">
            <div class="p-4 mb-3 bg-dark  text-center text-light h-80 rounded">
                <h4 class="font-italic mb-3">Are you that somebody?</h4>
                <p class="mb-5"></p>
                <form action="POST">
                   <input type="text" placeholder="name">
                    <input type="text" placeholder="email">
                </form>
                <a href="" class="btn mt-3">Lets Clink</a>
            </div>   
              <div class="p-4 mb-3 bg-light text-center rounded">
                  <div class="container">
                    <h4 class="font-italic"></h4>
                  </div>
              </div>
              <div class="p-4 mb-3 bg-light text-center rounded">
                <h4 class="font-italic">FOLLOW US</h4>
                <i class="fa fa-instagram px-3" aria-hidden="true"></i>
                <i class="fa fa-apple px-3" aria-hidden="true"></i>
                <i class="fa fa-spotify px-3" aria-hidden="true"></i>

              </div>
              <div class="p-4 mb-3 bg-light text-center rounded">
                <h4 class="font-italic"></h4>
              </div>
      
            <!-- <div class="p-4">
              <h4 class="font-italic">More Blogs</h4>
                ${renderedBlogs}
            </div> -->
      
            <!-- <div class="p-4">
              <h4 class="font-italic">Elsewhere</h4>
              <ol class="list-unstyled">
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
              </ol>
            </div> -->
          </aside>
  
    </div>
</div>
</div>
`
    });

  });
};