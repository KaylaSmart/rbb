const express = require('express');
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
        logger = require('morgan'),
        session = require('express-session');

        const MongoStore = require('connect-mongo')('session');
 var client = require('redis').createClient(process.env.REDIS_URL);
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

const redis = require('redis');
let redisClient ;


if(process.env.REDIS_URL){
    redisClient = redis.createClient(process.env.REDIS_URL);
    
}else{
 redisClient.createClient();  
}


// mongoose.connect('mongodb://localhost/app_demo');
mongoose.Promise = global.Promise;


app.use(bodyParser.urlencoded({extended: true}));
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


// app.use(require('express-session')({
//     secret: "Gleemer Slaps so Dang hard",
//     resave: false,
//     saveUninitialized: false
// }));
app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());//encode
passport.deserializeUser(User.deserializeUser());//unencode


mongoose.connect('mongodb+srv://devsmart:juturna@cluster0-oureg.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to DB!');
}).catch(err => {
   console.log('ERROR', err.message); 
});

mongoose.set('useCreateIndex', true);


// mongoose.connect(connectionOptions);
 
app.use(session({
    secret: 'foo',
    store: new MongoStore({url:'mongodb+srv://devsmart:juturna@cluster0-oureg.mongodb.net/test?retryWrites=true&w=majority'})
}));

app.use('/', indexRoutes);
app.use('/blogs', blogRoutes);
app.use('/admin', adminRoutes);
// app.use("/admin/:id/post", postRoutes);




app.listen(port,() =>{

    console.log('server started....')
});

