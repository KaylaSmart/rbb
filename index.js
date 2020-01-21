const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const adminblogRouter = require('./routes/admin/blogs');
const blogRouter = require('./routes/blogs');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true })); // applys the parser will automatically to every route the app uses 
app.use(cookieSession({
    keys:['erjaoejrikjwrtajnktmkmfipjmwpkt104i34it545smghjsmfk545368974nvjfsl']
})
);

app.use(authRouter);
app.use(blogRouter);
app.use(adminblogRouter);

app.listen(5000, () => {
    console.log('Listening');
}); 

server.listen(port, () => {
    console.log("App is running on port " + port)
});