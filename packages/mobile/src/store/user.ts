import { EntitiesUserStore } from '@leng/entities';
class UserStore extends EntitiesUserStore {
    constructor() {
        super()
    }
    type = "WeChat";
}
export default new UserStore();