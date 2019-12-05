import { observable, action } from 'mobx';
/**
 * 用户实体
 */
export class EntitiesUserStore {
    constructor() {

    }
    @observable
    info = {
        name: "",
        age: 0,
        sex: true,
    }
    @observable
    name = "名字123";
    @action
    onUpdate(name) {
        this.name = name;
        console.log("TCL: UserStore -> onUpdate -> name", name)
    }
}
// export default new EntitiesUserStore();