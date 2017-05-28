'use strict';

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');   //解析原始request请求，然后把解析后的参数，绑定到ctx.request.body中
const controller = require('./controller')

//创建一个Koa对象  表示web app本身
const app = new Koa();


//打印请求url
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
    await next(); // 调用下一个middleware
});

app.use(bodyParser());

// 使用middleware:
app.use(controller());

//在端口3000监听
app.listen(4000);