/**
 * Config
 * 推荐应用开发遵循配置和代码分离的原则，将一些需要硬编码的业务配置放在配置文件中，同时配置文件支持各个不同的运行环境使用不同的配置，使用起来也非常方便，所有框架、插件和应用级别的配置都通过config对象获取到
 * 获取方式： 通过app.config从Application实例中获取config对象，也可以在Controller、Service、Helper的实例上通过this.config获取config对象
 */

import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config: PowerPartial<EggAppConfig> = {};

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1569575267553_8092';

  // add your egg config in here
  config.middleware = [];

  // config port 配置端口号
  config.cluster = {
      listen: {
          port: 8080,
      },
  };

  // add mysql
  // @ts-ignore
  config.sequelize = {
      dialect: 'mysql', // 数据库类型
      host: '127.0.0.1',
      port: '3306',
      username: 'root',
      password: 'zdp1985@0829ZDP',
      database: 'egg',
      timezone: '+08:00',
      pool: {
          max: 20,
          idle: 3000,
      },
  };

  // security
  config.security = {
      csrf: { // 禁用csrf，不建议
          enable: false
      }
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
