// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/Test';
import ExportNews from '../../../app/service/news';
import ExportPost from '../../../app/service/post';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    news: ExportNews;
    post: ExportPost;
  }
}
