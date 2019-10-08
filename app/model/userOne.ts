module.exports = app => {
    const { INTEGER, STRING } = app.Sequelize;
    const UserOne = app.model.define('user_one', {
        id: {
            type: INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: STRING(20),
            allowNull: false,
        }}, { freezeTableName: true, tableName: 'user_one' });
    // tslint:disable-next-line:only-arrow-functions
    UserOne.associate = function() {
        app.model.UserOne.hasOne(app.model.Info, { foreignKey: 'user_id' });
        app.model.UserOne.hasMany(app.model.Family, { foreignKey: 'user_id', targetKey: 'id' });
    };
    return UserOne;
};
