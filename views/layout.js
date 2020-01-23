module.exports = ({ content }) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/tex-gyre-adventor" type="text/css"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/v4-shims.css">
        <link rel="apple-touch-icon" sizes="180x180" href="./images/apple-touch-icon.png">
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="./images/favicon-16x16.png">
        <link rel="manifest" href="./images/site.webmanifest">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="https://indestructibletype.com/fonts/Jost.css" type="text/css" charset="utf-8" />    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="/css/style.css">

        <title>RBB</title>
      </head>
      
         <body class=" text-center">
    
        <!-- logo top -->
        <div class="container-fluid  text-center py-2" id="topnav">
        <div class="row ">
            <div class="col-2 pt-1 justify-content-start text-center">
                <span onclick="openNav()"><i class="fa fa-bars mx-1 " style="font-size:20px"></i></span>
            </div>
            <div class="col-8 text-center">
                <a href="" class="blog-header-logo">RED BOTTOM BRUNCH</a>
            </div>
            <div class="col-2 justify-content-end align-items-center">
                <i class="fa fa-instagram px-3" aria-hidden="true"><a href""></a></i>
                <i class="fa fa-apple px-3" aria-hidden="true"><a href="https://podcasts.apple.com/us/podcast/red-bottom-brunch-podcast/id1437120471"></a></i>
                <i class="fa fa-spotify px-3" aria-hidden="true"><a href""></a></i>
            </div>
        </div>
</div> 

    <div class="container-lg " id="top-div">
      <nav class="navbar navbar-expand navbar-light w-100  mt-0" id="mainnav">
          <div class="collapse navbar-collapse justify-content-center" i>
            <ul class="navbar-nav justify-content-between ">
              <li class="nav-item px-5">
                <a class="nav-link" href="/">HOME</a>
              </li>
              <li class="nav-item px-5">
                <a class="nav-link" href="/about">ABOUT</a>
              </li>
              <li class="nav-item px-5">
                  <a class="nav-link " href="blogs">BLOG</a>
              </li>
              <li class="nav-item px-5">
                  <a class="nav-link" href="pod">PODCAST</a>
              </li>
              <li class="nav-item px-5">
                  <a class="nav-link " href="about/#thegals">THE GALS</a>
              </li>
            </ul>
          </div>
        </nav>
    </div>
    <div id="myNav" class="overlay">

    <!-- Button to close the overlay navigation -->
  
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  
    <!-- Overlay content -->
    <div class="overlay-content">
      <a href="./home.js">HOME</a>
      <a href="./about.js">ABOUT</a>
      <a href="./index.js">BLOG</a>
      <a href="./pod.js">POD</a>
      <a href="./about.js/#thegals">THE GALS</a>
  
    </div>
  
  </div>
          ${content}
          <footer class="footer text-center ">
  <div class="">
    <p class="mb-0" >RED BOTTOM BRUNCH     2020</p>
  </div>
</footer>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
      AOS.init();

      function openNav() {
        document.getElementById("myNav").style.width = "100%";
      }
      
      /* Close when someone clicks on the "x" symbol inside the overlay */
      function closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }
    </script>
  </body>
</html>
    `;
  };
  