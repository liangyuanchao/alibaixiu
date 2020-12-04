const Router = require('koa-router');
const router = new Router();
const {adminLoginController} = require('../../controller/adminController');

router.get('/adminlogin', adminLoginController.index);

module.exports = router;