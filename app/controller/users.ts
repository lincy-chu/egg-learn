import Util from "../utils";

exports.index = async (ctx) => {
    ctx.body = Util.success([{ type: 'index' }]);
};
exports.new = async (ctx) => {
    ctx.body = Util.success([{ type: 'new' }]);
};
exports.create = async (ctx) => {
    ctx.body = Util.success([{ type: 'create' }]);
};
exports.show = async (ctx) => {
    ctx.body = Util.success([{ type: 'show' }]);
};
exports.edit = async (ctx) => {
    ctx.body = Util.success([{ type: 'edit' }]);
};
exports.update = async (ctx) => {
    ctx.body = Util.success([{ type: 'update' }]);
};
exports.destroy = async (ctx) => {
    ctx.body = Util.success([{ type: 'destroy' }]);
};