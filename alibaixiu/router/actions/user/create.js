const {User, validateUser} = require('../../../model/user');

// // hash密码
// const bcrypt = require('bcrypt');
// 工具
const _ = require('lodash');

module.exports = async (ctx) => {
    // 数据验证
    const {error} = validateUser(ctx.fields);
    // 格式不符合要求
    if(error) {
        ctx.body = {
            state: 0,
            message: error.message
        }
    }
    // 格式符合要求继续向下执行
    // 查询用户
    let user = await User.findOne({email: ctx.fields.email});
    // 用户已存在
    if(user) {
        ctx.body = {
            state: 0,
            message: '邮箱已经被注册'
        }
    };
    // 用户不存在 可以正常执行注册流程
    // // 生成盐
    // const salt = await bcrypt.genSalt(10);
    // // 对密码进行加密
    // ctx.fields.password = await bcrypt.hash(ctx.fields.password, salt);
    // 创建用户
    user = new User(ctx.fields);
    // 保存用户
    await user.save();
    // 响应
    ctx.send(_.pick(user, ['_id', 'email', 'nickName', 'role', 'avatar', 'createTime', 'status']));
}