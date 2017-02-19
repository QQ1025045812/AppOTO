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
            app.post('/login', function(req,res){
                var name = req.body.name ;
                var user = users[name];
                if(user && user.pwd_s == req.body.pwd && "1" == req.body.role){
                    console.log('商家登录~');
                    res.cookie('name_s',name);
                    res.cookie('role',req.body.role);
                    res.cookie('service',users[name].service);
                    res.redirect('/shop'); //转到商家页面
                }else if(user && user.pwd_u == req.body.pwd && "2" == req.body.role){
                    console.log('用户登录~');
                    res.cookie('name_u',name);
                    res.cookie('role',req.body.role);
                    res.cookie('tel',users[name].tel);
                    res.redirect('/list'); //转到用户页面
                }
                else{
                    res.send(404);
                }
            });
        }
