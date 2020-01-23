const layout = require('../layout');

module.exports = () => {
    return layout({
        content:`
        <!-- top of home page -->
        <div class="container-fluid two mb-3 mx-0 text-center px-0 img-fluid" id="homeabout"> 
        </div>
        
        
        <div class=" container-flud py-5 px-5 my-0 mx-0 text-right">
          <h5 class=" hilove display-1 d-none d-sm-none d-md-block d-lg-inline " data-aos="fade-left">hey there</h5>
        </div>
        
        
        <div class="container-fluid my-5 mt-2 my-sm-0 text-center" id= "featured">
          <div class="row">
            <div class="col-xl-4 slide-in-left d-none d-sm-inline" id="girl">
              <img src="./images/rbb_logo_final (1).png" alt="" data-aos="fade-right" class="">
            </div>
            <div class="col-xl-8 col-md-6 ">
              <h5 class=" xoxo d-block d-sm-block d-md-none text-center display-2" data-aos="fade-left">hey there, lets dish</h5>
        
              <h5 class="display-2 d-none d-sm-none d-md-inlne d-lg-inline d-xl-inline" data-aos="fade-left" >LETS DISH</h5>
              <p data-aos="fade-left" class="text-justify px-4 px-md-1">Welcome, Brunch Babes! 
        
                Red Bottom Brunch was created by three masters educated women who simply love brunch, cocktails and table talk.  Our mission for the brand is giving women of color the platform to build and grow through networking and communication in the Philadelphia area.  The ladies of RBB hope to encourage, inspire, and empower women through brunch related topics, events, and conversations.
                
                </p >  
            <br>
                <a data-aos="fade-left" href="" class="btn">READ MORE</a>
            </div>
          </div>
         </div>
        <!-- end of top of home page  -->
        
        
         <div class="container-fluid justify-content-center follow mt-2 px-4 p-md-1 py-sm-2">
           <div class="row text-center px-0 py-0">
             <div class="col-lg-12">
              <h2>what we love</h2>
              <p> MOJITOS | BRUNCH | PHILADELPHIA | INSTAGRAM | EGGS BENEDICT </p>  
             </div>
           </div>
         </div>
        
        
         <div class="continer-fluid px-0 " id="blog-link">
           <div class="row h-100">
            <div class="col-lg-4 col-md-4 col-sm-4 mx-0 my-0">
              <div class=" h-100 h-sm-20 mx-sm-0 mr-md-0 pt-3 pt-md-5 px-md-1 text-center overflow-hidden" id="addCards" data-aos="zoom-in">
              <div class=" my-3">
              <!-- <h2 class="display-5">Another headline</h2> -->
              <!-- <p class="lead">And an even wittier subheading.</p> -->
              <i class="fas fa-glass-cheers fa-7x "></i>
              <div class="card-body">
                <h4 class="card-title">LETS CLINK</h4>
                <p class="card-text d-sm-block">Sign up for our newsletter for exclusive RBB updates!</p>
                <a href="#" class="btn "> CLINK</a>
              </div>
            </div>
          </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 mx-0 my-0">
          <div class=" h-100 h-sm-20 mx-sm-0 mr-md-0 pt-3 pt-md-5 px-md-1 px-sm-0 text-center overflow-hidden" id="addCards" data-aos="zoom-in" >
            <div class="my-3 ">
              <div class="card-body">
                <i class="far fa-keyboard fa-7x fa-sm-3x "></i>
                <h5 class="card-title">BLOG</h5>
                <p class="card-text  d-sm-block">Check out our latest posts!</p>
                <a href="index.js" class="btn ">BLOG</a>
              </div>
            </div>
          </div>  
          </div>
        
          <div class="col-lg-4 col-md-4 col-sm-4 mx-0 my-0">
          <div class="h-100 mr-md-0  mx-sm-0 pt-3  pt-md-5 px-md-2 text-center overflow-hidden" id="addCards" data-aos="zoom-in">
            <div class="my-3">
              <i class="fas fa-microphone-alt fa-7x "></i>
              <div class="card-body">
                <h5 class="card-title">PODCAST</h5>
                <p class="card-text  d-sm-block">Listen to new episodes here!
                </p>
                <a href="pod.js" class="btn ">LISTEN</a>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
        
        
        
         <div class="container-flud justify-content-center text-center h-60 socials" id="">
        
          <div class="row">
            <div class="col-md-12">
          
            
            </div>
          </div>
           <!-- <div class="overlay"></div> -->
           <p class="text-light">@therbbpodcast</p>
           <div class="row my-3 py-3">    
             <div class="col-sm-3 m-0 p-0">
               <div>
                <img src="./images/Screen Shot 2020-01-20 at 5.32.41 PM.png" alt="" class="insta">
               </div>
             </div>
             <div class="col-sm-3 m-0 p-0">
               <div class="">
                <img src="./images/Screen Shot 2020-01-20 at 5.33.01 PM.png" alt="" class="insta">
               </div>
        
             </div>
             <div class="col-sm=3 m-0 p-0">
               <div>
                <img src="./images/Screen Shot 2020-01-20 at 5.33.26 PM.png" alt="" class="insta">
               </div>
             </div>
             <div class="col-sm-3 m-0 p-0">
              <div>
               <img src="./images/Screen Shot 2020-01-20 at 5.42.04 PM.png" alt="" class="insta">
              </div>
            </div>
          
            </div>
           </div> 
         </div>
        


        
        `
    })
};