import { EntitiesUserStore } from '@leng/entities';
class UserStore extends EntitiesUserStore {
    constructor() {
        super()
    }
    type = "Vue";
}
export default new UserStore();