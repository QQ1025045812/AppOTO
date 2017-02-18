var Cookie= require('../node_modules/cookie'); //使用cookie
module.exports = function(app){
    var io = require('socket.io')(app);//app为参数
    var sockets = {};       //存储用户的socket
    var socketShops={};     //存储商家的socket
    var socketShopsName={}; //存储所有商家的名字
    var socketsTel={};      //存储所有用户电话
    var socketShopsService={}; //存储商家的服务
};