import { observable, action } from 'mobx';
export class UserStore {
    constructor() {

    }
    @observable
    name = "名字123";
    @action
    onUpdate(name) {
        this.name = name;
        console.log("TCL: UserStore -> onUpdate -> name", name)
    }
}
export default new UserStore();