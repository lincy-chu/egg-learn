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

    /**
     * 一对多：hasMany
     */
    async hasMany() {
        const { ctx } = this;
        const data = await this.app.model.UserOne.findAll({
            include: {
                model: this.app.model.Family,
            },
        });
        ctx.body = ctx.helper.success(data);
    }

    /**
     * 一对多 belongsTo
     */
    async belongsTo() {
        const { ctx } = this;
        const data = await this.app.model.Family.findAll({
            include: {
                model: this.app.model.UserOne,
            },
        });
        ctx.body = ctx.helper.success(data);
    }

    /**
     * 多对多
     */
    async belongsToMany() {
        const { ctx } = this;
        const data = await this.app.model.Lesson.findAll({
            include: {
                model: this.app.model.Teacher,
            },
        });
        ctx.body = ctx.helper.success(data);
    }
}

export default UserOneController;
