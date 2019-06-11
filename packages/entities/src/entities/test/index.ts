import format from 'date-fns/format/index';
import { action, observable } from 'mobx';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * 时间实体
 */
export class EntitiesTestStore {
    constructor() {
      
    }
    @observable
    dataSource = [];

}