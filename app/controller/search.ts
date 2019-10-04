/**
 * router实战
 * 参数获取
 * Query String方式
 * /search?xxx=yyy => ctx.query.xxx
 * @param ctx
 */

exports.index = async ctx => {
    ctx.body = ctx.helper.success({ data: `${ctx.query.name}` });
};

/**
 * router实战
 * 参数获取
 * 参数命名方式
 * /search/:id/:name => ctx.params.xxx
 * @param ctx
 */
exports.info = async ctx => {
    ctx.body = ctx.helper.success({ id: `${ctx.params.id}`, name: `${ctx.params.name}` });
};

/**
 * 获取参数对象
 * @param ctx
 */
exports.detail = async ctx => {
    ctx.body = ctx.helper.success({ package: `${ctx.params[0]}` });
};

/**
 * 获取所有用户传递相同的key
 * @param ctx
 * ctx.queries
 */
exports.queries = async ctx => {
    ctx.body = ctx.helper.success(ctx.queries);
};