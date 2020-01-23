const layout = require('../layout');

module.exports = ({ blogs }) => {
  return layout({
    content: `
      <section class="banner">
        <div class="container">
          <div class="columns is-centered">
            
          </div>
        </div>
      </section>
      
      <section class="h-100 py-5">
        <div class="container-fluid ">
          <div class="columns">
            <div class="column "></div>
            <div class="column is-four-fifths">
              <div>
                <h1 class="title text-center">COMING SOON!</h1>
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
