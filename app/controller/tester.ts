import { Controller } from 'egg';
import { v1 } from 'uuid';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class Tester extends Controller {
    async findOne() {
        const { ctx } = this;
        await ctx.model.User.findOne({
            where: {
                id: '13443940e4e6-11e9-8e1e-9783af6e375f'
            }
        }).then(data => {
            ctx.body = ctx.helper.success(data);
        })
    }
    async findAll() { // 查找所有
        const { ctx } = this;
        await ctx.model.User.findAll().then(user => {
            ctx.body = ctx.helper.success({ user });
        });
    }
    async create() { // 创建
        const { ctx } = this;
        const { name, age, address } = ctx.request.body; // 获取post请求参数
        if (!name || !age || !address) {
            ctx.body = ctx.helper.error(1, '参数不正确');
        } else {
            const user = {
                id: v1(),
                name,
                age,
                address
            };
            await ctx.model.User.create(user).then(user => {
                ctx.body = ctx.helper.success({ user });
            });
        }
    }
    async update() { // 更新
        const { ctx } = this;
        await ctx.model.User.update(
            {name: 'robin.zhu'}, // 更新参数
            {
                where: { // 查找条件
                    id: '018c5370-e4e8-11e9-842d-f71454b5aa59'
                }
            }
            ).then(data => {
                console.log('res', data);
                ctx.body = ctx.helper.success();
        });
    }
    async delete() { // 删除
        const { ctx } = this;
        await ctx.model.User.destroy({
            where: {
                id: '018c5370-e4e8-11e9-842d-f71454b5aa59'
            }
        }).then(() => {
            ctx.body = ctx.helper.success();
        })
    }
    async findOneAttr() { // 模糊查询，选择返回字段
        const { ctx } = this;
        await ctx.model.User.findAll({
            where: {
                address: {
                    [Op.like]: `广东%`
                }
            },
            attributes: ['id', 'name', 'age']
        }).then(data => {
            ctx.body = ctx.helper.success(data);
        });
    }
    async findAnd() {
        /**
         * Sequelize公开了可用于更负责比较的符号运算符
         *
         * const Op = Sequelize.Op
         * {
         *     id: {
         *         [Op.and]: { a: 5 }  // AND (a = 5)
         *         [Op.or]: [{ a: 5 }, { b: 6 }] // (a = 5 OR b = 6)
         *         [Op.gt]： 6 // id > 6
         *         [Op.gte]： 6 // id >= 6
         *         [Op.lt]: 6 // id < 6
         *         [Op.lte]：6 // id <= 6
         *         [Op.ne]: 6 // id != 6
         *         [Op.between]: [6, 10] // BETWEEN 6 AND 10
         *         [Op.notBetween]: [11, 15] // NOT BETWEEN 11 AND 15
         *         [Op.in]: [1, 2] // IN [1, 2]
         *         [Op.notIn]: [1, 2] // NOT IN [1, 2]
         *         [Op.like]: '%hat' // like '%hat'
         *         [Op.notLike]: '%hat' // not like '%hat'
         *         [Op.iLike]: '%hat' // ILIKE '%hat' (不区分大小写)
         *         [Op.notILike]: '%hat' // NOT ILIKE '%hat' (不区分大小写)
         *         [Op.overlap]: [1, 2] //
         *     }
         * }
         *
         */
        const { ctx } = this;
        const option = {
            where: {
                address: {
                    [Op.like]: `广东%`
                },
                [Op.and]: {
                    age: 22
                }
            },
            attributes: ['id', 'name', 'address']
        };
        await ctx.model.User.findAll(option).then(data => {
            ctx.body = ctx.helper.success(data);
        });
    }
    async findMore() {
        const { ctx } = this;
        await ctx.model.User.findAll({
            where: {
                age: {
                    // [Op.between]: [18, 22] // between 18 and 22
                    // [Op.gt]: 60 // > 60
                    [Op.notBetween]: [10, 50] // not between 10 and 50
                }
            }
        }).then(data => {
            ctx.body = ctx.helper.success(data);
        });
    }
    async getInfo() {
        const { ctx } = this;
        const option = {where: { age: { [Op.gt]: 50 } }};
        let count = 0;
        let max = 0;
        let min = 0;
        let sum = 0;
        // count - 计算数据库中元素的出现次数
        await ctx.model.User.count(option).then(data => { count = data; });
        // max - 获取特定属性的最大值
        await ctx.model.User.max('age', option).then(data => { max = data; });
        // min - 获取特定表中特定属性的最小值
        await ctx.model.User.min('age', option).then(data => { min = data; });
        // sum - 对特定属性的值求和
        await ctx.model.User.sum('age', option).then(data => { sum = data; });
        await ctx.model.User.findAll(option).then(list => {
            ctx.body = ctx.helper.success({ list, count, max, min, sum });
        });
    }
    async query() {
        const { ctx } = this;
        await ctx.model.query('select * from user where age between 18 and 28 order by age desc').then(data => {
            ctx.body = ctx.helper.success({ data });
        });
    }
}

export default Tester;
