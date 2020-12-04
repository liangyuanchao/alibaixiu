const indexRouter = require('./index.router');
const detailRouter = require('./detail.router');
const listRouter = require('./list.router')



module.exports = {
    indexRouter,
    detailRouter,
    listRouter
}

// const Router = require('koa-router');

// const router = new Router();

// router.get('/index', async (ctx) => {
//     await ctx.render('index')
// })

// module.exports = router;
