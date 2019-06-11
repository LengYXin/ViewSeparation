import format from 'date-fns/format/index';
import { action, observable } from 'mobx';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * 时间实体
 */
export class EntitiesTimeStore {
    constructor() {
        this.onSetTime();
        interval(1000).pipe(map(() => Date.now())).subscribe(obs => {
            console.log("TCL: EntitiesTimeStore -> constructor -> obs", obs);
            this.onSetTime(obs);
        });
    }
    @observable
    currentTime = '';
    @action
    onSetTime(time = Date.now()) {
        this.currentTime = format(time, "YYYY-MM-DD HH:mm:ss");
    }
}