import Entities from './entities';
import { action, toJS } from 'mobx';
import lodash from 'lodash';
import { timer, TimeInterval } from 'rxjs';
import { catchError, filter, map, timeout } from "rxjs/operators";
/**
 * 对象 动作 行为 
 * @export
 * @class EntitiesUserBehavior
 * @extends {Entities}
 */
export default class EntitiesUserBehavior extends Entities {
    /**
     * 用户登录
     * @param {*} UserName 用户名
     * @param {*} Password 密码
     * @memberof EntitiesUserBehavior
     */
    @action
    async  onLogin(UserName, Password) {
        this.Loading = true;
        const res = await timer(1000).toPromise();
        this.onVerifyingLanding(UserName, Password);
    }
    /**
     * 验证登陆
     * @private
     * @memberof EntitiesUserBehavior
     */
    @action
    private onVerifyingLanding(UserName, Password) {
        this.OnlineState = true;
        this.Loading = false;
        this.Name = UserName;
    }
    /**
     * 退出登陆
     * @memberof EntitiesUserBehavior
     */
    @action
    onOutLogin() {
        this.OnlineState = false;
    }
}