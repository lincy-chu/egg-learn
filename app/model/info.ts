// @ts-ignore
// tslint:disable-next-line:no-var-requires
const moment = require('moment');
module.exports = app => {
    const { INTEGER, STRING, DATE, NOW } = app.Sequelize;
    const Info = app.model.define('Info', {
        id: {
            type: INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        age: {
            type: INTEGER.UNSIGNED,
        },
        address: {
            type: STRING(50),
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
        },
    }, { freezeTableName: true, tableName: 'user_info' });
    // tslint:disable-next-line:only-arrow-functions
    Info.associate = function() {
        app.model.Info.belongsTo(app.model.UserOne, { foreignKey: 'user_id', targetKey: 'id' });
    };
    return Info;
};
