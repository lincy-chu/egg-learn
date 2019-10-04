// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCookie from '../../../app/controller/cookie';
import ExportForm from '../../../app/controller/form';
import ExportHome from '../../../app/controller/home';
import ExportPost from '../../../app/controller/post';
import ExportPostBase from '../../../app/controller/postBase';
import ExportSearch from '../../../app/controller/search';
import ExportServiceCenter from '../../../app/controller/serviceCenter';
import ExportSession from '../../../app/controller/session';
import ExportStudent from '../../../app/controller/student';
import ExportTester from '../../../app/controller/tester';
import ExportUser from '../../../app/controller/user';
import ExportUsers from '../../../app/controller/users';

declare module 'egg' {
  interface IController {
    cookie: ExportCookie;
    form: ExportForm;
    home: ExportHome;
    post: ExportPost;
    postBase: ExportPostBase;
    search: ExportSearch;
    serviceCenter: ExportServiceCenter;
    session: ExportSession;
    student: ExportStudent;
    tester: ExportTester;
    user: ExportUser;
    users: ExportUsers;
  }
}
