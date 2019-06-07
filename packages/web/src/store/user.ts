import { EntitiesUserStore } from '@leng/entities';
class Store extends EntitiesUserStore {
    constructor() {
        super()
    }
    type = "Vue";
}
export default new Store();