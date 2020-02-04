const express = require('express');     
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const mongoose = require('mongoose'),
    methodOverride = require('method-override'),
        app = express(),
        passport = require('passport'),
        bodyParser = require('body-parser'),
        LocalStrategy = require('passport-local'),
        passportLocalMongoose = require('passport-local-mongoose'),
        User = require('./models/user'),
        Blog = require('./models/blog'),
        flash = require('connect-flash'),
        logger = require('morgan');
        // require('dotenv').load();

    mongoose.connect(process.env.MONGODB_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to DB!');
    }).catch(err => {
         console.log('ERROR', err.message);     
    });
    mongoose.Promise = global.Promise;

    mongoose.set('useCreateIndex', true);

        const store = new MongoDBStore({
            uri: 'mongodb://heroku_xpflmzb1:ddpf9gd8uskf0qhob8lp97m1o3@ds049467.mlab.com:49467/heroku_xpflmzb1',
            collection: 'mySessions'
          });


const client = require('redis').createClient(process.env.REDIS_URL);
const fs = require('fs');
const blogRoutes = require("./routes/blog"),
    indexRoutes = require("./routes/index"),
    adminRoutes = require("./routes/admin");
    //  db = require('../models');
    
// const redis = require('redis').createClient();
const path = require('path');

        // seedDB = requre('./seeds');
const port = process.env.PORT || 5000;
const router = express.Router();


// const databaseUri = process.env.MONGODB_URI || 'mongodb://localhost/app_demo';
//
//REDIS REDIS
const redis = require('redis');
let redisClient ;

if(process.env.REDIS_URL){
    redisClient = redis.createClient(process.env.REDIS_URL);
    
}else{
 redisClient.createClient();  
}


// mongoose.connect('mongodb://localhost/app_demo');



app.use(bodyParser.urlencoded({extended: true}));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('public'));

    const path = require('path');
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'public'))
    })
}

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))
app.use(logger("dev"));
// mongoose.connect(databaseUri, { useUnifiedTopology: true, useNewUrlParser: true })
//       .then(() => console.log(`Database connected`))
//       .catch(err => console.log(`Database connection error: ${err.message}`));    
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


   
  store.on('error', function(error) {
    console.log(error);
  });
   

app.use(require('express-session')({
    secret: "Gleemer Slaps so Dang hard",
    resave: false,
    store: store,
    saveUninitialized: false
}));






app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());//encode
passport.deserializeUser(User.deserializeUser());//unencode

 

app.use('/', indexRoutes);
app.use('/blogs', blogRoutes);
app.use('/admin', adminRoutes);
// app.use("/admin/:id/post", postRoutes);




app.listen(port,() =>{

    console.log('server started....')
});

