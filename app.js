//模块引入
var path=require('path');
    logger=require('morgan');
    express=require('express');
    favicon=require('serve-favicon');
    bodyParser=require('body-parser');
    cookieParser=require('cookie-parser');
    http=require('http');
var app=express();
    server=http.createServer(app);
//路径与使用view模板为html
app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('.html',require('ejs').__express);
//中间用到的插件
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:false}));
app.use(cookieParser());
//设置本地静态资源路径
app.use(express.static(path.join(__dirname,'public')));
console.log(path.join(__dirname,'public'))
require('./routes')(app);  
require('./lib/socket')(server);
server.listen(8085,function(){
    console.log('App start,port 8085.');
});
