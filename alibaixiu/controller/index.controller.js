const { index } = require("./detail.controller");

module.exports = {
    async index(ctx){
        await ctx.render('index');
    }
}