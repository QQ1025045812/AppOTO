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
                if(user && user.pwd_s==req.body.pwd && req.body.role == "1"){
                    res.cookie('name_s',name);
                    res.cookie('role',req.body.role);
                    res.redirect('/shop');//跳转商家页面
                }else if(user&&user.pwd_u==req.body.pwd&& req.body.role=="2"){
                    res.cookie('name_u',name);
                    res.cookie('role',req.body.role);
                    res.redirect('/list');//跳转到用户页面
                }else{
                    res.send("账号密码不匹配或者未选择正确角色，详细请联系管理管.....");
                }
            });
        }
