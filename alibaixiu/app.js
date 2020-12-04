const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const views = require('koa-views');
const path = require('path');
const nunjucks = require('koa-nunjucks-2');

const app = new Koa();
const router = new Router();

// 静态资源
app.use(static(path.resolve(__dirname, './static' )));
// 模板
app.use(nunjucks({
    ext:"html",   //指定模板后缀
    path:path.join(__dirname,'views'), //指定视图目录
    nunjucksConfig:{
      trimBlocks:true   //开启转义，防止xss漏洞
    }
  }))


router.get('/index', async (ctx, next) => {
    await ctx.render('index')
})

app.use(router.routes());

app.listen(8080, () => {
    console.log('服务器启动成功,请访问localhost:8080');
})