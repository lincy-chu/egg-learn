module.exports = app => {
    const { INTEGER, STRING } = app.Sequelize;
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
        }}, { freezeTableName: true, tableName: 'user_info' });
    // tslint:disable-next-line:only-arrow-functions
    Info.associate = function() {
        app.model.Info.belongsTo(app.model.UserOne, { foreignKey: 'user_id', targetKey: 'id' });
    };
    return Info;
};
