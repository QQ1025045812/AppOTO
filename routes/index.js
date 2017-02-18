var users=require('../user.json');
    module.exports=function(app){
            app.get('/',function(req,res){
                res.render('login');
            });
            app.get('/list',function(req,res){
                res.render('list')
            });
            app.get('/shop',function(req,res){
                res.render('shop');
            });
            app.post('/login',function(req,res){
                var name=req.body.name;
                var user=users[name];
                console.log(name)
                console.log(user)
                console.log(req.body.role)
                if(user && user.pwd_s==req.body.pwd && req.body.role == "1"){
                    res.cookie('name_s',name);
                    res.cookie('role',req.body.role);
                    res.redirect('/shop');//跳转商家页面
                }else if(user&&user.pwd_u==req.body.pwd&& req.body.role=="2"){
                    console.log("用户登录");
                    res.cookie('name_u',name);
                    res.cookie('role',req.body.role);
                    res.redirect('/list');//跳转到用户页面
                }else{
                     console.log("test3")
                    res.sendStatus(404);
                }
            });
        }
