/**
 * service 用于编写业务逻辑层，可选
 * 框架提供了一个Service基类，并推荐所有的service都继承于该基类实现
 */

import { Service } from 'egg';

export interface NewsItem {
    id: number,
    title: string
}

export default class NewsService extends Service {
    public page: number = 1;
    public pageSize: number = 2;

    public async list(page?: number, pageSize?: number): Promise<NewsItem[]> {
        if (page && page != 0) {
            this.page = page;
        }
        if (pageSize) {
            this.pageSize = pageSize;
        }
        const list = [{id: 1, title: '测试1'}, {id: 2, title: '测试2'}, {id: 3, title: '测试3'}, {id: 4, title: '测试4'}, {id: 5, title: '测试5'}];
        const data = list.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
        return data;
    }
}