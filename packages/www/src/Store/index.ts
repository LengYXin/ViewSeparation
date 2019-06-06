import { EntitiesUserStore } from '@leng/entities';
class UserStore extends EntitiesUserStore {
    constructor() {
        super()
    }
    type = "React";
}
export default new UserStore();