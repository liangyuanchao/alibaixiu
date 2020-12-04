const Router = require('koa-router');
const router = new Router();
const {detailController} = require('../controller')

router.get('/detail', detailController.index);

module.exports = router;
