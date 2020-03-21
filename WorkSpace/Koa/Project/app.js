var Koa = require('koa')

var Router = require('koa-router')

var app = new Koa()

var router = new Router()

//配置路由
router.get('/', async (ctx) => {
    
    ctx.body = '首页'; 
}).get('/new', async (ctx) => {
    ctx.body = '这是一个新闻页面'
})

app
    .use(router.routes())
    .use(router.middleware())

app.listen(3000)         