// @ts-ignore
// tslint:disable-next-line:no-var-requires
const moment = require('moment');
module.exports = app => {
    /**
     * 额外
     * 在参数中include是可以在里面继续嵌套include的;
     */
    const { INTEGER, STRING, DATE, NOW } = app.Sequelize;
    const UserOne = app.model.define('user_one', {
        id: {
            type: INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: STRING(20),
            allowNull: false,
        },
        createdAt: {
            type: DATE,
            allowNull: false,
            defaultValue: NOW,
            get() {
                // @ts-ignore
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
            },
        },
        updatedAt: {
            type: DATE,
            allowNull: false,
            defaultValue: NOW,
            get() {
                // @ts-ignore
                return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
            },
        }}, { freezeTableName: true, tableName: 'user_one' });
    // tslint:disable-next-line:only-arrow-functions
    UserOne.associate = function() {
        app.model.UserOne.hasOne(app.model.Info, { foreignKey: 'user_id' });
        app.model.UserOne.hasMany(app.model.Family, { foreignKey: 'user_id', targetKey: 'id' });
    };
    return UserOne;
};
