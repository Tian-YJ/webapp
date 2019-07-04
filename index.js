
var exp = require('express');
var path = require('path');
var app = exp();

var router = require('./routers/index.js')


var bodyParser = require('body-parser');

//session插件 搭建session环境存储数据
// var session = require('session');




app.set('views',path.join(__dirname,'views'));//ejs的静态路由
app.set('view engine','ejs');//定义文件类型


//设置静态路径
app.use(exp.static(path.join(__dirname,'public')));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));

//在app中配置 
// app.use(session({secret: 'Young'}));
//导入模块	
// app.use("/",require("./routers"));

router(app);

//设置，监听服务器端口
app.listen(8088,function(){
	console.log('启动服务...');
	console.log('server runing at 127.0.0.1:8088...')
})
