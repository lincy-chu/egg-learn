/**
 * 声明model
 * @param app
 */
module.exports = app => {
    const { STRING, TINYINT } = app.Sequelize;
    const User = app.model.define('user', {
        id: { type: STRING(36), primaryKey: true, autoIncrement: false},
        name: STRING(10),
        age: TINYINT(3),
        address: STRING(500),
    }, {
        freezeTableName: true, // model对应的表名将与model名相同
        timestamps: false, // 是否显示创建时间和更新时间，需要数据表中有create_at和update_at字段
    });
    return User;
};
