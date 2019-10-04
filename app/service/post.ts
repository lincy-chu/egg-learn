import { Service } from 'egg';

export interface User {
    name: string;
    age: number;
    address: string;
}

export default class PostService extends Service {
    public async listByUser(user: User) {
        return {
            user: { ...user }
        }
    }
}