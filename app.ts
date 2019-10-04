/**
 * 生命周期
 */

class AppBootHook {
    public app: any;
    constructor(app) {
        this.app = app;
    }

    configWillLoad() { // 配置文件即将加载，这是最后动态修改配置的时机
        console.log('configWillLoad');
    }

    configDidLoad() { // 配置文件加载完成
        console.log('configDidLoad');
    }

    async didLoad() { // 文件加载完成
        console.log('didLoad');
    }

    async willReady() { // 插件启动完毕
        console.log('willReady')
    }

    async didReady() { // worker准备就绪
        console.log('didReady');
    }

    async serverDidReady() { // 应用启动完成
        console.log('serverDidReady');
    }

    async beforeClose() { // 应用即将关闭
        console.log('app before close');
    }

}

module.exports = AppBootHook;