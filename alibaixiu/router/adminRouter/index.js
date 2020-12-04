const adminIndexRouter = require('./adminIndex.router');
const adminLoginRouter = require('./adminLogin.router');
const adminCategoriesRouter = require('./adminCategories.router');
const adminCommentsRouter = require('./adminComments.router');
const adminPasswordResetRouter = require('./adminPassword-reset.router');
const adminPostAddRouter = require('./adminPost-add.router');
const adminPostsRouter = require('./adminPosts.router');
const adminSettingsRouter = require('./adminSettings.router');
const adminSlidesRouter = require('./adminSlides.router');
const admiUserRouter = require('./admiUser.router');

module.exports = {
    adminIndexRouter,
    adminLoginRouter,
    adminCategoriesRouter,
    adminCommentsRouter,
    adminPasswordResetRouter,
    adminPostAddRouter,
    adminPostsRouter,
    adminSettingsRouter,
    adminSlidesRouter,
    admiUserRouter
}