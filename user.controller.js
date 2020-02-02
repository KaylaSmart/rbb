const User = require('./models/user');


module.exports = async function signUp(req, res){
    try{
        const user = await User.create(req.body);
            return res.status(201).send(" you have created an account !");
            } catch (e) {
                return res.status(500).json(e); 
            }
}


// const user = new User({username: 'user'});
// //    await user.setPassword('password');
// //    await user.save();
// //     User.register(new User({username:req.body.username}), req.body.password, async function(err){
// //          const {user} = await  passport.authenticate("local")(req, res, function(){
// //                 res.send("you have signed up!"); 
// //              });
// //         });
// // });