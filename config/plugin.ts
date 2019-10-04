/**
 * plugin 用于配置需要加载的插件
 */
import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
    validate: { // 设置表单验证，需安装egg-validate包
        enable: true,
        package: 'egg-validate'
    },
    sequelize: {
        enable: true,
        package: 'egg-sequelize'
    }
};

export default plugin;
