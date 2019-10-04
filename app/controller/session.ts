import { Controller } from 'egg';

/**
 * 框架内置了session插件，可以通过ctx.session获取session信息，如果想删除session可以直接设置ctx.session = null
 */
class SessionController extends Controller {
    async fetchPost() {
        const { ctx } = this;
        // 获取session上的信息
        const userId = ctx.session.userId;
        console.log('session', ctx.session);
        console.log('userId', userId);
        const data = {
            success: true,
            userId
        };
        console.log('data', data)
        ctx.body = ctx.helper.success(data)
    }
}

export default SessionController;
