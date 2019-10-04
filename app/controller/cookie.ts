import { Controller } from 'egg';

/**
 * Cookie
 *     通过ctx.cookie可以在Controller中便捷、安全的设置和获取Cookie
 */
class Cookie extends Controller {
    async add() {
        const { ctx } = this;
        let count = ctx.cookies.get('count');
        // @ts-ignore
        count = count && count !== 'null' ? Number(count): 0;
        // @ts-ignore
        ctx.cookies.set('count', ++count);
        ctx.body = ctx.helper.success({ count });
    }

    async remove() {
        const {ctx} = this;
        // @ts-ignore
        ctx.cookies.set('count', null);
        ctx.body = ctx.helper.success({count: null});
    }
}

export default Cookie;
