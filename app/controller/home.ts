/**
 * controller 用于解析用户的输入，处理后返回相应的结果
 * 框架提供了一个Controller基类，并推荐所有的Controller都继承于该基类实现
 * 该类Controller基类有下列属性：
 *   .ctx - 当前请求的Context实例
 *   .app - 应用的Application实例
 *   .config - 应用的配置
 *   .service - 应用所有的service
 *   .logger - 为当前controller封装的logger对象
 *
 * Logger 每个logger对象提供了4个级别的方法
 *   .logger.debug()
 *   .logger.info()
 *   .logger.warn()
 *   .logger.error()
 * 获取方式：
 *   .app.logger 如果我们想做一些应用级别的日志记录，如启动阶段的一些数据信息，记录一些业务上与请求无关的信息，都可以通过app.logger来完成
 *   .app.coreLogger 在开发应用时都不应该通过coreLogger打印日志，而框架和插件则需要通过它打印应用级别的日志，这样可以更清晰的区分应用和框架日志，通过coreLogger打印的日志会放到和Logger不同的文件中
 *   .ctx.logger 从Context实例上获取它，从访问方式上我们可以看出，context logger一定是与请求相关的，它打印的日志都会在前面带上一些当前的请求信息（如：[$userId/$ip/$traceId/${cost}ms $method $url]）
 *   .this.logger 可以在Controller和Service实例上通过this.logger获取它们，它们本质上就是一个Context Logger，不过在打印日志的时候还会额外加上文件路径
 */
import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx, service } = this;
    const {page, pageSize} = ctx.query;
    const data: any = await service.news.list(page, pageSize);
    const now: any = this.ctx.helper.formatDate(new Date());
    console.log(this.config);
    console.log('now', now);
    ctx.body = await ctx.helper.success(data);
  }
}
