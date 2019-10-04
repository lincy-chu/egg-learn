/**
 * router 用户配置URL路由规则
 *
 * router详细定义说明
 *   下面是路由的完整定义，参数可以根据场景的不同，自由选择：
 *    router.verb('path-match', app.controller.action);
 *    router.verb('router-name', 'path-match', app.controller.action);
 *    router.verb('path-match', middleware1, ..., middlewareN, app.controller.action);
 *    router.verb('router-name', middleware1, ..., middlewareN, app.controller.action);
 *    路由完整定义主要包括5个部分：
 *      .verb - 永不触发动作，支持get、post等所有普http方法
 *        .router.head - HEAD
 *        .router.option - OPTION
 *        .router.get - GET
 *        .router.post - POST
 *        .router.put - PUT
 *        .router.patch - PATCH
 *        .router.delete - DELETE
 *        .router.del - 由于delete是一个保留字，所有提供了一个delete方法的别名
 *        .router.redirect - 可以对url进行重定向处理
 *      .router-name 给路由设定一个别名，可以通过Helper提供的辅助函数pathFor和urlFor来生成URL。（可选）
 *      .path-match 路由url路径
 *      .middleware1...middlewareN 在router里面可以配置多个middleware。（可选）指定该URL路径只经过这些middleware处理
 *      .controller 指定路由映射到具体的controller上，controller可以有两种写法：
 *        .app.controller.user.fetch - 直接指定一个具体的controller
 *        .'user.fetch' 可以简写为字符串形式
 *
 *   Restful风格的URL定义
 *     提供了app.resources('routerName', 'pathMatch', controller) 快速在一个路径上生成crud路由结构
 */
import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/', controller.home.index);
  router.get('/user/:id', controller.user.info);

  // query获取参数，需要注意的是当query string中的key重复时，ctx.query只取key第一次出现时的值，后面再出现的都会被忽略，例如: http://127.0.0.1:8080/search?name=robin
  router.get('/search', controller.search.index);

  // queries 有时候系统会设计成让用户传递相同的key，例如：http://127.0.0.1:8080/search/queries?category=egg&id=1&id=2&id=3&category=robin&user=robin&user=jack

  router.get('/search/queries', controller.search.queries);

  // 参数命名方式，/search/:id/:name， 例如：http://127.0.0.1:8080/search/123/robin
  router.get('/search/:id/:name', controller.search.info);

  // 表单获取
  router.post('/form', controller.form.post);

  // 表单校验
  router.post('/student', controller.student.create);

  // 重定向
  // 内部重定向
  router.get('/index', '/serviceCenter/index', controller.serviceCenter.index);
  // router.redirect() 接收3个参数，分别为原地址、目的地址（跳转到的地址）、错误代码，例如：http://127.0.0.1:8080/theIndex
  router.redirect('/theIndex', '/serviceCenter/index', 303); // 访问/theIndex，自动重定向到/serviceCenter/index

  // 外部重定向，例如： http://127.0.0.1:8080/others?type=bing&keyword=robin
  router.get('/others', controller.serviceCenter.other);

  // restful风格的api接口
  router.resources('users', '/api/users', controller.users);
  /**
   * 上述代码就在/api/users路径下部署了一组CRUD路径结构，对应的controller为app/controller/users.ts，接下来只需要在users.ts中实现对应的函数即可
   *
   * method   path               router name       controller.action
   * GET      /users             users             app.controller.users.index
   * GET      /users/new         new_user          app.controller.users.new
   * GET      /users/:id         user              app.controller.users.show
   * GET      /users/:id/:edit   edit_user         app.controller.users.edit
   * POST     /users             users             app.controller.users.create
   * PUT      /users/:id         user              app.controller.users.update
   * DELETE   /users/:id         user              app.controller.users.destroy
   *
   * 如果不需要其中的某几个方法，可以不用在user.ts中实现，这样对应URL路径也不会注册到router
   */

  router.get('/post', controller.post.create);

  router.get('/postBase', controller.postBase.list);

  router.get('/cookie/add', controller.cookie.add);

  router.get('/cookie/remove', controller.cookie.remove);

  // 获取session信息
  router.get('/session', controller.session.fetchPost);

  // 根据键值进行查找
  router.get('/tester/findOne', controller.tester.findOne);

  // 查找全部
  router.get('/tester', controller.tester.findAll);

  // 向数据库中添加数据
  router.post('/tester/create', controller.tester.create);

  // 更新数据
  router.put('/tester/updateById', controller.tester.update);

  // 删除数据
  router.patch('/tester/deleteById', controller.tester.delete);

  // 在数据库搜索特定的元素
  router.get('/tester/findOneAttr', controller.tester.findOneAttr);

  // 并列查询
  router.get('/tester/findAnd', controller.tester.findAnd);

  // 复杂查询
  // 具有多层嵌套and、or和not条件的查询中，可能会很复杂。为此，可以使用or、and或not
  router.get('/tester/findMore', controller.tester.findMore);

  // 使用限制、偏移量、顺序和组来操作数据集
  router.get('/tester/getInfo', controller.tester.getInfo);

  // 自定义查询
  router.get('/tester/query', controller.tester.query);

  // 复杂参数的获取, /search/package/regex，例如：http://127.0.0.1:8080/search/robin/1.0.1
  // router.get(/^\/([\w-.]+\/[\w-.]+)$/, controller.search.detail);
};
