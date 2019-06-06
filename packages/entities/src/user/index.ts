import { observable, action } from 'mobx';
export class UserStore {
    constructor() {

    }
    @observable name = "名字";
    @action
    onUpdate(name) {
        this.name = name;
    }
};
export default new UserStore();