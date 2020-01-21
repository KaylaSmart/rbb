const layout = require('../layout');

module.exports = () => {
    return layout({
        content: `
        <div class="container-fluid aboutrbb my-3 h-85">
            <div class="row align-items-center justify-content-center">
                <div class="col-6 my-5 px-4">
                    <img src="../images/IMG-2608.JPG" alt="">
                </div>
                <div class="col-6 px-4 text-justify ">
                    <h2 class="">hey brunch babe!</h2>
                    <br>
                   <!-- <h3 class="text-center">Hey Brunch Babe!</h3>  -->
                    <p> <br>
                    Red Bottom Brunch was created by three masters educated women who simply love brunch, cocktails and table talk.  Our mission for the brand is giving women of color the platform to build and grow through networking and communication in the Philadelphia area.  The ladies of RBB hope to encourage, inspire, and empower women through brunch related topics, events, and conversations.
                    <br>
                          <br>
                          In 2018 after many brunch meetings, phone calls, and girls nights we launched the first season of The RBB Podcast.  On this platform, we explore various topics in today’s society and culture while sharing our personal perspectives and opinions.  In efforts to expand our brand, we now have a brunch dedicated blog!  Each month we’ll be heading to brunch and giving you the inside scoop on our experiences. You can also head over to our Youtube channel to check out our reviews, tutorials, and vlogs.  
                          <br>
                          Thank you for stopping and feel free to grab a seat because brunch has been served!
                          <br>
                          We're happy to have you on this journey with us! </p>
                         <h5 class="xoxo text-center"> xoxo 
                         <br> the rbb gals</h5> 
                </div>
            </div>
        </div>
        <div class=" container text-center middle ">
           <p>the gals</p>
        </div>
        <div class="container-fluid thegals py-3" id="thegals">
            <div class="row my-5 mx-5 align-items-center h-25" >
                <div class="col-4 text-center ">
                    <h1 class="display-4 clear">NONNI</h1>
                    <h1 class="display-1 cursive">nonni</h1>
                </div>
                <div class="col-8 px-4 py-3">
                    <p> A small city girl with big dreams. She is a firm believer in staying true to who you are. She enjoys good vibes and has a taste for travel. Aside from RBB, Nonni loves writing, reading fiction (that will most likely become an adaptation) and scrolling Pinterest for home decor inspiration. Be sure to keep up with this gal on Instagram @modestrebel. 
                    </p>
                    <div class="container-fluid align-items-center text-center ">
                        <a href="" class="btn instabtn">@modestrebel</a>
                    </div>
                </div>
            </div>
            <div class="row my-3 mx-5 align-items-center h-25" >
                <div class="col-4 text-center">
                    <h1 class="display-4 clear">MOE</h1>
                    <h1 class="display-1 cursive pl-5"> moe </h1>
                </div>
                <div class="col-8 px-4 py-3">
                    <p>This RBBgal has an eye for style, with a DIY attitude! Like her co-host she enjoys writing, brunch, makeup, and the occasional audio book. You can find her personal blog at lifewithasideofwine.com  and on Instagram @___moeeee____ .
                    </p>
                    <div class="container-fluid align-items-center text-center ">
                        <a href="" class="btn instabtn">@___moeeee____</a>
                    </div>
                </div>
            </div>
            <div class="row my-5 mx-5 align-items-center h-25" >
                <div class="col-4 text-center">
                    <h1 class="display-4 clear">HON.E</h1>
                    <h1 class="display-1 cursive">hon.e</h1>
                </div>
                <div class="col-8 px-4 py-3 justify-content-center align-items-center ">
                    <p> A mental health advocate and self-described Eggs Benedict connoisseur with a love of traveling. Hon.E has a “you gotta do what you gotta do” type attitude but enjoys her downtime when she’s not hustling and bustling. In her spare time, Hon.E likes writing scripts/poems/blogs,checking out interesting spots in Philadelphia, and target shooting with her brother (she’s a pretty good shot!) Keep up with Hon.E
                        on Instagram @hon.e.bunch and check out her blog at honeyscorner.com! </p>
                        <div class="container text-center">
                            <a href="" class="btn instabtn">@hon.e.bunch</a>
                        </div>
                </div>
             </div>
            </div>
        </div>
        
        `
    })

};