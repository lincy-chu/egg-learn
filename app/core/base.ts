/**
 * 自定义Controller基类
 */
import { Controller } from 'egg';
import {User} from "../service/post";

class BaseController extends Controller {
    public theUser: User = {
        name: 'robin.zhu',
        age: 22,
        address: '河南新县'
    };

    get user() {
        return this.theUser;
    }

    success(data) {
        this.ctx.body = this.ctx.helper.success(data);
    }

    notFound(msg) {
        msg = msg || 'not found';
        this.ctx.throw(404, msg);
    }
}

export default BaseController;