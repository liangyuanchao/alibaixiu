const Router = require('koa-router');
const router = new Router();
const {listController} = require('../controller');

router.get('/list', listController.index);

module.exports = router;