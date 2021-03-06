const nunjucks = require('nunjucks');

function createEnv(path, opts) {
    var
        autoescape = opts.autoescape === undefined ? true : opts.autoescape,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader(path, {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

var env = createEnv('views', {
    watch: true,
    noCache: true,
    filters: {
        hex: function (n) {
            return '0x' + n.toString(16);
        }
    }
});


var s = env.render('hello.html', {
    name: '小明',
    fruits: ['张三','李四','王五']
});

// var s = env.render('extend.html',{
//     body: 'bla bla bla...'
// });

console.log(s);


