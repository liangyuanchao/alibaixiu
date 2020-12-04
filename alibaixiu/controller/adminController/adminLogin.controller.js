module.exports = {
    async index(ctx) {
        await ctx.render('admin/login');
    }
}