module.exports = app => {
    const { INTEGER, STRING, TINYINT } = app.Sequelize;
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
        }}, { freezeTableName: true, tableName: 'family' });
    return Family;
};
