module.exports = ({ content }) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
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
    <link rel="stylesheet" href="../../admin.css">
    <title>RBB</title>
    <body class="">
    <style>
    .sidenav {
      height: 100%; /* Full-height: remove this if you want "auto" height */
      width: 160px; /* Set the width of the sidebar */
      position: fixed; /* Fixed Sidebar (stay in place on scroll) */
      z-index: 1; /* Stay on top */
      top: 0; /* Stay at the top */
      left: 0;
      background-color: #111; /* Black */
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 20px;
    }
    
    /* The navigation menu links */
    .sidenav a {
      padding: 6px 8px 6px 16px;
      text-decoration: none;
      font-size: 25px;
      color: #818181;
      display: block;
    }
    
    /* When you mouse over the navigation links, change their color */
    .sidenav a:hover {
      color: #f1f1f1;
    }
    
    /* Style page content */
    .main {
      margin-left: 160px; /* Same as the width of the sidebar */
      padding: 0px 10px;
    }
    
    /* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
    @media screen and (max-height: 450px) {
      .sidenav {padding-top: 15px;}
      .sidenav a {font-size: 18px;}
    }
    </style>
         
  
         <header>
           <nav class="navbar navbar-bottom">
             <div class="container navbar-container">
               <div>
                 <a href="/admin/blogpost">
                   <!-- <h3 class="title">Admin Panel</h3> -->
                 </a>
               </div>
               <div class="navbar-item">
                 <div class="navbar-buttons">
                   <div class="navbar-item">
                     <a href="/admin/blogpost"><i class="fa fa-star"></i> Blogs</a>
                   </div>
                 </div>
               </div>
             </div>
           </nav>
         </header>
        <div class="container-fluid justify-content-center">
          <div class="row">
              <div class="sidenav mr-5">
                <a href="/admin/blogpost">BLOGS</a>
                <a href="/admin/blogpost/new">NEW</a>
                <a href="/admin/blogpost/:id/edit">EDIT</a>
              </div>
            ${content}
          </div>
        
          </div>
          
        </body>
   
      </html>
    `;
  };
  