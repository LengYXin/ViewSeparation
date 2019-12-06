import format from 'date-fns/format/index';
import { BindAll } from 'lodash-decorators';
import { action, observable } from 'mobx';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * 时间实体
 */
@BindAll()
export class EntitiesTimeStore {
    constructor() {
        this.onSetTime();
    }
    /**
     * 当前时间
     * @memberof EntitiesTimeStore
     */
    @observable
    currentTime = '';
    /**
     * 设置当前时间
     *
     * @param {*} [time=Date.now()]
     * @memberof EntitiesTimeStore
     */
    @action
    onSetTime(time = Date.now()) {
        this.currentTime = format(time, "yyyy-MM-dd HH:mm:ss");
        // console.log("TCL: EntitiesTimeStore -> onSetTime -> this.currentTime ", this.currentTime )
    }
    /**
     * 计时器
     * @type {(Subscription | undefined)}
     * @memberof EntitiesTimeStore
     */
    TimeSubscription: Subscription | undefined;
    /**
     * 切换 计时器状态
     *
     * @param {*} [start=!this.TimeSubscription]
     * @returns
     * @memberof EntitiesTimeStore
     */
    onToggleTime(start = !this.TimeSubscription) {
        if (start) {
            this.onStartTime();
        } else {
            this.onEndTime();
        }
        return start
    }
    /**
     * 开始计时
     *
     * @private
     * @memberof EntitiesTimeStore
     */
    private onStartTime() {
        this.onEndTime();
        this.onSetTime();
        this.TimeSubscription = interval(1000).pipe(map(() => Date.now())).subscribe(obs => {
            // console.log("TCL: EntitiesTimeStore -> constructor -> obs", obs);
            this.onSetTime(obs);
        });
    }
    /**
     * 结束 计时
     *
     * @private
     * @memberof EntitiesTimeStore
     */
    private onEndTime() {
        this.TimeSubscription && this.TimeSubscription.unsubscribe();
        this.TimeSubscription = undefined;
    }
}