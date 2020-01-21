module.exports = ({content}) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>RBB</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
    <link href="/css/main.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
    <link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://indestructibletype.com/fonts/Jost.css" type="text/css" charset="utf-8" />    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./signin.css">
    <!-- <link rel="stylesheet" href="./main.css"> -->
    
    <title>Sign In</title>
</head>
<style>
body{
    height: 100vh;
    width: 100%;
    background: transparent;
    font-family: sans-serif;
    color: #ffff;
}

#logo a{
    text-decoration: none;
    font-weight: bolder;
    color:#ffff;
}
#topnav{
    color: #ffff;
    background:black ;
    box-shadow:  0 0 12 33rem rgba(0, 0, 0, .5) !important;  

}

h1{    color: #ffff !important;
}

label{
    color: #ffff !important;
}

#sign{
    height: 100%;
    width:50%;
    float: left;
}

#sign img{
    margin-top: 50%;

}

.title{
    margin-top: 50%;

}

.shadow{
    box-shadow:  0 0 12 33rem rgba(0, 0, 0, .5);  
    box-shadow: 10px 0 5px -2px rgb(109, 109, 109);
}

.color-change-5x {
	-webkit-animation: color-change-5x 8s linear infinite alternate both;
	        animation: color-change-5x 8s linear infinite alternate both;
}

  @-webkit-keyframes color-change-5x {
    0% {
      background: #ade7eb;
    }
    25% {
      background: #95839f;
    }
    50% {
      background: #f08888ec;
    }
    75% {
      background: #f5be10;
    }
    100% {
      background: #9fcb91;
    }
  }
  @keyframes color-change-5x {
    0% {
      background: #9be7ed;
    }
    25% {
      background: #a680bc;
    }
    50% {
          background: #f08888ec;
      ;
    }
    75% {
      background: #d2bd78;
    }
    100% {
      background: #a0f0887e;
    }
  }
  

</style>
<body>
    <div class="container-fluid  text-center" id="topnav">
        <div class="align-items-center">
        <header class="blog-header py-2 ">
            <div class="row flex-nowrap justify-content-between ">
                <div class="col-4 pt-2  justify-content-start d-flex text-center">
                    <i class="fa fa-bars mx-3 mt-1" style="font-size:20px"></i>
                </div>
                <div class="col-4 text-center" id="logo">
                    <a href="" class="blog-header-logo">RBB</a>
                </div>
                <div class="col-4 d-flex justify-content-end align-items-center">
                    <i class="fa fa-instagram px-3" aria-hidden="true"></i>
                    <i class="fa fa-apple px-3" aria-hidden="true"></i>
                    <i class="fa fa-spotify px-3" aria-hidden="true"></i>
                </div>
            </div>
        </header>
        </div>
</div>

<div class="container-fluid h-20">
    <h3></h3>

</div>
${content}

<div class="container-fluid  "id="sign">
<div class="row justify-content-center align-items-center ">
    <div class="col-6  ">
   <img src="./images/71FA2A8C-46E5-4966-86B9-D87F8A6546D9.png" alt="">
</div>        
</div>
</div>


<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>   

`
}



  
