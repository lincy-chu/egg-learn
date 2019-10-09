// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportFamily from '../../../app/model/family';
import ExportInfo from '../../../app/model/info';
import ExportLesson from '../../../app/model/lesson';
import ExportTeacherLessonRelation from '../../../app/model/teacher-lesson-relation';
import ExportTeacher from '../../../app/model/teacher';
import ExportUser from '../../../app/model/user';
import ExportUserOne from '../../../app/model/userOne';

declare module 'egg' {
  interface IModel {
    Family: ReturnType<typeof ExportFamily>;
    Info: ReturnType<typeof ExportInfo>;
    Lesson: ReturnType<typeof ExportLesson>;
    TeacherLessonRelation: ReturnType<typeof ExportTeacherLessonRelation>;
    Teacher: ReturnType<typeof ExportTeacher>;
    User: ReturnType<typeof ExportUser>;
    UserOne: ReturnType<typeof ExportUserOne>;
  }
}
