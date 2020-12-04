const Router = require('koa-router');
const router = new Router();
const {indexController} = require('../controller');

router.get('/index', indexController.index);

module.exports = router; 