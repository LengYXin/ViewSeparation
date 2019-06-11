import format from 'date-fns/format/index';
import { action, observable } from 'mobx';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import Request from '../../utils/request';

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
    async  onTest() {
        try {
            const data = await Request.ajax({
                url: 'https://www.easy-mock.com/mock/5a9130e5a2f38c18c96bce97/example/mock',
                // // method: "POST",
                // headers: {
                //     credentials: 'include',
                //     accept: "*/*",
                //     "Content-Type": "application/json",
                // }
            }).toPromise()
            console.log("TCL: EntitiesTimeStore -> onTest -> data", data)
        } catch (error) {
            console.error(error)
        }
    }
}