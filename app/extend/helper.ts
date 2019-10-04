/**
 * Helper - 自定义helper
 * Helper用来提供一些使用的utility函数。它的作用在于我们可以将一些常用的动作抽离在helper.js里面称为一些独立的函数，这样可以用JavaScript或TypeScript来写复杂的逻辑，避免逻辑分散各处，同时可以更好的编写测试用例。
 * Helper自身是一个类，有和Controller基类一样的属性，它也会在每次请求时进行实例化，因此Helper上的所有函数也能获取到当前请求相关的上下文信息。
 */

module.exports = {
    formatDate(date) {
        return new Date(date).toLocaleDateString();
    },
    success(data = null) { // 自定义请求成功回调函数
        return {
            code: 0,
            msg: '',
            data
        };
    },
    error(code = 500, msg = '系统异常') { // 自定义请求失败回调函数
        return {
            code,
            msg,
            data: null
        };
    }
};
