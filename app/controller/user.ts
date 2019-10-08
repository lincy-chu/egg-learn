import { Controller } from 'egg';
class UserController extends Controller {
    async info() {
        const { ctx } = this;
        ctx.body = await ctx.helper.success({ name: `Hello ${ctx.params.id}` });
    }
}

export default UserController;
