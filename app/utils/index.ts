export default class Util {
    static success(data: object) {
        return {
            code: 0,
            msg: '',
            data: data || []
        };
    }
    static error(code, msg) {
        return {
            code,
            msg,
            data: []
        };
    }
}