import Taro, { request } from '@tarojs/taro';
import delay from 'lodash/delay';
// import ListIteratee from 'lodash/listit';
import remove from 'lodash/remove';
import update from 'lodash/update';
import findIndex from 'lodash/findIndex';

import { action, observable, runInAction } from 'mobx';
import { WXRequest } from './request';

/**
 * 分页函数
 */
export default class ServerClass {
    constructor(
        public params: request.Param
    ) {

        const data = params.data
        this.params.data = {
            page: 1,
            pageSize: 10,
            ...data
        }
    }
    /**
      * 首次加载
      */
    @observable firstLoading = true;
    // 加载
    @observable PagingLoading = false;
    // 刷新
    @observable PagingRefreshing = false;
    // 数据
    @observable PagingData: any[] = [];
    @observable endData = false;
    /**
     * 获取数据
     * @param refresh 刷新数据
     */
    @action.bound
    async getPagingData(refresh = false, showLoading = true) {
        // console.time("getPagingData");
        // console.log(this.PagingLoading, this.PagingRefreshing);
        try {
            if (this.PagingLoading || this.PagingRefreshing) {
                return
            }
            let PagingData = [], startTime = new Date().getTime();
            // 刷新 or 第一次请求
            if (refresh) {
                if (showLoading) {
                    Taro.showLoading({ title: "加载中~", mask: true })
                }
                // if (!this.firstLoading) {
                this.PagingRefreshing = true;
                // }
                this.params.data.page = 1;
                this.endData = false;
            } else {
                !this.PagingLoading && (this.PagingLoading = true);
                if (this.endData) {
                    this.PagingLoading = false;
                    this.PagingRefreshing = false;
                    return console.log("无更多数据");
                }
            }
            const res = await WXRequest.request(this.params).then(x => (x.isSuccess && x.data.list) || [])
            PagingData = res;
            delay(() => {
                this.runInAction(refresh, PagingData)
            }, 400 - (new Date().getTime() - startTime))
        } catch (error) {
            Taro.hideLoading()
        }
    }
    /**
     * 设置数据状态
     * @param refresh 
     * @param PagingData 
     */
    runInAction(refresh, PagingData) {
        // console.timeEnd("getPagingData");
        runInAction(() => {
            this.PagingLoading = false;
            this.PagingRefreshing = false;
            this.firstLoading = false;
            if (PagingData.length >= this.params.data.pageSize) {
                this.params.data.page++;
            } else {
                this.endData = true;
            }
            // 刷新 or 第一次请求
            if (refresh) {
                this.PagingData = PagingData;
                Taro.hideLoading()
            } else {
                this.PagingData = [...this.PagingData, ...PagingData];
            }
        });
    }
    /**
     * 重置参数
     * @param param 
     */
    @action.bound
    onReset(param?, url?: string) {
        this.firstLoading = true;
        // this.PagingData = [];
        this.params.data = {
            ...this.params.data,
            page: 1,
            pageSize: 10,
            ...param
        }
        if (url) {
            this.params.url = url;
        }
    }
    /**
     * 移除某个数组
     * @param predicate 
     */
    @action.bound
    onRemove(predicate?: any) {
        remove(this.PagingData, predicate);
        if (this.params.data.page == 1) {
            this.getPagingData(true)
        }
    }
    /**
     * 修改 参数
     */
    @action.bound
    onUpdate(predicate: any, updater: (value: any) => any) {
        const PagingData = [...this.PagingData]
        const index = findIndex(PagingData, predicate)
        if (index != -1) {
            runInAction(() => {
                update(PagingData, findIndex(PagingData, predicate), updater)
                this.PagingData = PagingData;
            })
        }
    }
}

