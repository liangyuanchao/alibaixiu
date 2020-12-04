const Router = require('koa-router');
const router = new Router();
const {adminIndexController} = require('../../controller/adminController');

router.get('/adminIndex', adminIndexController.index)

module.exports = router;