// 用户路由
const Router = require('koa-router');
const router = new Router();

// 创建用户
router.post('/', require('./actions/user/create'));

// 导出路由
module.exports = router
