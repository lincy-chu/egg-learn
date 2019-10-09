// @ts-ignore
// tslint:disable-next-line:no-var-requires
const moment = require('moment');
module.exports = app => {
    const { INTEGER, STRING, TINYINT, DATE, NOW } = app.Sequelize;
    const Family = app.model.define('Family', {
        id: {
            type: INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: STRING(20),
        },
        gender: {
            type: TINYINT(1),
        },
        relationship: {
            type: STRING(10),
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
    }, { freezeTableName: true, tableName: 'family' });
    // tslint:disable-next-line:only-arrow-functions
    Family.associate = function() {
        app.model.Family.belongsTo(app.model.UserOne, { foreignKey: 'user_id', targetKey: 'id' });
    };
    return Family;
};
