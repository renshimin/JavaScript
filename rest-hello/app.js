const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const templating = require('./templating');
const rest = require('./rest');

const app = new Koa();

// 打印请求url
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

let staticFiles = require('./static-files');
app.use(staticFiles('/static/', __dirname + '/static'));

// 解析post请求
app.use(bodyParser());

// 给ctx加上render()来使用nunjucks
app.use(templating('views', {
    noCache: true,
    watch: true
}));

app.use(rest.restify());

// 处理url路由
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');