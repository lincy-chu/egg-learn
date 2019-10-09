// @ts-ignore
// tslint:disable-next-line:no-var-requires
const moment = require('moment');
module.exports = app => {
    const { INTEGER, STRING, DATE, NOW } = app.Sequelize;
    const Lesson = app.model.define('Lesson', {
        id: {
            type: INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: STRING(20),
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
    }, { freezeTableName: true, tableName: 'lesson' });
    Lesson.associate = () => {
        app.model.Lesson.belongsToMany(app.model.Teacher, { through: app.model.TeacherLessonRelation, foreignKey: 'lessonId', otherKey: 'teacherId' });
    };
    return Lesson;
};
