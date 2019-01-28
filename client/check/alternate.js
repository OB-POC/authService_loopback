// Login.afterRemote('login', function(ctx, username, password, next) {
    //     var allUsers = ctx.result;
    //     console.log(ctx.result);
    //     allUsers.map((value,index) =>{
    //         value["id"] = index
    //     });
    //     if(allUsers instanceof Array){
    //     var user = allUsers.filter(user.username === username && user.password === password)
    //         if(user.length ===1){
    //             let token = jwt.sign({ username: username }, secret, { expiresIn: 86400 });
    //             ctx.res.status(200).json({
    //                 authenticated: true,
    //                 token : token
    //               })
    //         }
    //         else{
    //             ctx.res.status(401).json({
    //                 errorMsg: 'Unauthorized: Username or Password is incorrect'
    //             });
    //         }
    //     }
    //     else{
    //         ctx.res.status(400).json({
    //             errorMsg: 'Unauthorized: Username or Password is incorrect'
    //         });
    //     }
    //     ctx.result = token 
    //     next();
    // });