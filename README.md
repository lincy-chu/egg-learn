# 详细介绍请参考下列链接
1. [一文看懂egg.js-基础全面讲解（上）](https://juejin.im/post/5d357f0e51882563914b49bb)
2. [一文看懂egg.js-基础全面讲解（中）](https://juejin.im/post/5d36679ce51d45554877a6ab)
3. [一文看懂egg.js-基础全面讲解（下）](https://juejin.im/post/5d37ba17f265da1bc94f2f97)
4. [一文看懂egg.js-基础全面讲解(完结)](https://juejin.im/post/5d38160c51882551c37fbcd2)

# egg-sequelize连表查询
1.[egg-sequelize连表查询](https://blog.csdn.net/qq_30101131/article/details/79474905)

# hackernews-async-ts

[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+

### 文件加载顺序
#### 文件按照下列顺序自上而下加载，egg会遍历所有的loadUnit加载上述文件（应用、框架插件各不相同），加载时有一定的优先级
。按插件 => 框架 => 应用依次加载
。插件之间的顺序由依赖关系决定，被依赖方先加载，无依赖按object key配置顺序加载
。框架按继承顺序加载，越底层越先加载
- package.json
- config/plugin.{env}.js
- app/extend/applications.js
- app/extend/request.js
- app/extend/response.js
- app/extend/context.js
- app/extend/helper.js
- agent.js
- app.js
- app/service
- app/middle
- app/controller
- app/router.js

