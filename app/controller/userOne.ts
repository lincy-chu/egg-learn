import { Controller } from 'egg';

class UserOneController extends Controller {
    /**
     * 一对一：hasOne
     */
    async getUserListIncludeInfo() {
        const { ctx } = this;
        const result = await this.app.model.UserOne.findAll({
            include: [{ model: this.app.model.Info }],
        });
        const result1 = await this.app.model.UserOne.findAll({
            include: [{
                model: this.app.model.Info,
                where: {
                    age: {
                        [this.app.Sequelize.Op.gte]: 50,
                    },
                },
            }],
        });
        const result2 = await this.app.model.UserOne.findAll({
            include: [{
                model: this.app.model.Info,
                where: {
                    age: {
                        [this.app.Sequelize.Op.gte]: 50,
                    },
                },
                required: false,
            }],
        });
        ctx.body = ctx.helper.success({
            no_where: result,
            has_where: result1,
            where_has_required_false: result2,
        });
    }
}

export default UserOneController;
