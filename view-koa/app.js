const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./templating');

//创建一个koa对象 表示web app本身
const app = new Koa();
//判断是否是production环境
const isProduction = process.env.NODE_ENV === 'production';

// 打印请求url
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

//处理静态文件
if (! isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

// 解析post请求
app.use(bodyParser());

// 给ctx加上render()来使用nunjucks
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

// 处理url路由
app.use(controller());

app.listen(3000);