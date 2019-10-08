// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportFamily from '../../../app/model/family';
import ExportInfo from '../../../app/model/info';
import ExportUser from '../../../app/model/user';
import ExportUserOne from '../../../app/model/userOne';

declare module 'egg' {
  interface IModel {
    Family: ReturnType<typeof ExportFamily>;
    Info: ReturnType<typeof ExportInfo>;
    User: ReturnType<typeof ExportUser>;
    UserOne: ReturnType<typeof ExportUserOne>;
  }
}
