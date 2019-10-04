/**
 * 控制器
 * controller负责解析用户的输入，处理后返回相应的结果
 * 框架推荐controller层主要对用户的请求参数进行处理（效验、转换），然后调用对应的service方法处理业务，得到业务结果后封装并返回
 *  .获取用户通过http传递过来的请求参数
 *  .校验、组装参数
 *  .调用service进行业务处理，必要时处理转换service的返回结果，让它使用用户的需求
 *  .通过http将结果响应给用户
 *
 * 所有controller文件必须放在app/controller目录下，可以支持多级目录，访问的时候可以通过目录名级联访问
 */
import { Controller } from 'egg';

class PostController extends Controller {
    async create() {
        const { ctx } = this;
        ctx.body = ctx.helper.success({ name: 'robin.zhu' });
    }
}

export default PostController;