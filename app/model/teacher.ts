// @ts-ignore
// tslint:disable-next-line:no-var-requires
const moment = require('moment');
module.exports = app => {
    const { INTEGER, STRING, DATE, NOW } = app.Sequelize;
    const Teacher = app.model.define('Teacher', {
        id: {
            type: INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
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
        },
    }, { freezeTableName: true, tableName: 'teacher' });
    // tslint:disable-next-line:only-arrow-functions
    Teacher.associate = function() {
    };
    return Teacher;
};
