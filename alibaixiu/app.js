const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const path = require('path');
const nunjucks = require('koa-nunjucks-2');
const mongoose = require('mongoose');

const {adminIndexRouter, adminLoginRouter} = require('./router/adminRouter');

const {indexRouter, detailRouter, listRouter} = require('./router');
// const indexRouter = require('./router')


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


// router.get('/index', async (ctx, next) => {
//     await ctx.render('index')
// })

// // 数据库连接
// mongoose.connect('mongoose://localhost:27017/alibaixiu',  { useNewUrlParser: true, useCreateIndex: true})
//   .then(() => console.log('数据库连接成功'))
//   .catch(() => console.log('数据库连接失败'))

app.use(adminIndexRouter.routes());
app.use(adminLoginRouter.routes());

app.use(indexRouter.routes());
app.use(detailRouter.routes());
app.use(listRouter.routes());


app.listen(8080, () => {
    console.log('服务器启动成功,请访问localhost:8080');
})