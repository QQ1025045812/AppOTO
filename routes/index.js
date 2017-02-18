var users=require('../user.json');
module.exports=function(app){
    console.log()
    module.exports=function(app){
            app.get('/',function(req,res){
                // res.send("hello")
                // res.render('login');
                console.log("welcome")
                res.send('hello world');
            });
            app.get('/list',function(req,res){
                res.render('list')
            });
            app.get('/shops',function(req,res){
                res.render('shops');
            });
            app.post('/login',function(req,res){
                var name=req.body.name;
                var user=users[name];
                if(user && user.pwd_s==req.body.pwd && "1" == req.body.role){
                    console.log("商家登陆");
                    res.cookie('name_s',name);
                    res.cookie('role',req.body.role);
                    res.redirect('/shops');//跳转商家页面
                }else if(user&&user.pwd_u==req.body.pwd&&"2"==req.body.role){
                    console.log("用户登录");
                    res.cookie('name_u',name);
                    res.cookie('role',req.body.role);
                    res.redirect('/list');//跳转到用户页面
                }else{
                    res.sendStatus(404);
                }
            });
        }
};
