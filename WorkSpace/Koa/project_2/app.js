var Koa = require('koa')

var Router = require('koa-router')

var views = require('koa-views')

var app = new Koa()

var router = new Router()

//配置模板引擎
app.use(views('views', {
    extension: 'ejs'
    //  应用ejs模板引擎
}))



router.get('/', async (ctx) => {

    ctx.body ='heh'
    await ctx.render('index', {
        title: title
    })
})
router.get('/news', async (cxt) => {
    ctx.body = '这是新闻页'

})

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen('3000')