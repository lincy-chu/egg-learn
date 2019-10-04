exports.index = async ctx => {
    ctx.body = ctx.helper.success({ page: "This is serviceCenter's index page!" });
};

exports.other = async ctx => {
    const type = ctx.query.type;
    const keyword = ctx.query.keyword || 'nodejs';

    if (type === 'bing') {
        ctx.redirect(`http://cn.bing.com/search?q=${keyword}`);
    } else {
        ctx.redirect(`http://www.google.com/search?q=${keyword}`);
    }
};