const createRule = {
    name: {
        type: 'email',
    },
    password: {
        type: 'string'
    },
};

exports.create = async ctx => {
    // 如果校验报错，会抛出异常
    ctx.validate(createRule);
    ctx.body = ctx.helper.success({ ...ctx.request.body });
};