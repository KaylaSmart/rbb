const layout = require('../layout');

module.exports = ({ blogs }) => {
    const renderedBlogs = blogs.map(blog => {
        return `
        <div>
          <h2> COMING SOON</>
        </div>`
       
      
      })     
  
    .join('\n');

  return layout({
    content: `
      <section class="banner">
        <div class="container">
          <div class="columns is-centered">
            <img src="/images/banner.jpg" />
          </div>
        </div>
      </section>
      
      <section>
        <div class="container">
          <div class="columns">
            <div class="column "></div>
            <div class="column is-four-fifths">
              <div>
                <h2 class="title text-center">Featured Post</h2>
                <div class="columns ">
                 
                </div>
              </div>
            </div>
            <div class="column "></div>
          </div>
        </div>
      </section>
    `
  });
};  
