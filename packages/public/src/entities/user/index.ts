import lodash from 'lodash';
import { BindAll } from 'lodash-decorators';
import { action, observable } from 'mobx';
import { Random } from 'mockjs';
/**
 * 用户实体
 */
@BindAll()
export class EntitiesUserStore {
    constructor() {

    }
    @observable
    name = Random.cname();
    @action
    onUpdate(name = Random.cname()) {
        this.name = name;
        console.log("TCL: UserStore -> onUpdate -> name", name)
    }
}
// export default new EntitiesUserStore();