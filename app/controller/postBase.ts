import BaseController from './../core/base';

class PostBaseController extends BaseController {
    async list() {
        const posts = await this.service.post.listByUser(this.user);
        this.success(posts);
    }
}

export default PostBaseController;