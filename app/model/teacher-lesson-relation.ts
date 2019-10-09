// @ts-ignore
// tslint:disable-next-line:no-var-requires
const moment = require('moment');
module.exports = app => {
    const { INTEGER, DATE, NOW } = app.Sequelize;
    const TeacherLessonRelation = app.model.define('TeacherLessonRelation', {
        id: {
            type: INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        lessonId: {
            type: INTEGER.UNSIGNED,
            allowNull: false,
        },
        teacherId: {
            type: INTEGER.UNSIGNED,
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
    }, {
        freezeTableName: true,
        tableName: 'teacher_lesson_relation',
    });
    // tslint:disable-next-line:only-arrow-functions
    TeacherLessonRelation.associate = function() {
    };
    return TeacherLessonRelation;
};
