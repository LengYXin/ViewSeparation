import Taro, { request, uploadFile, saveImageToPhotosAlbum } from "@tarojs/taro";
import endsWith from 'lodash/endsWith';
import startsWith from 'lodash/startsWith';
import trimStart from 'lodash/trimStart';
import cloneDeep from 'lodash/cloneDeep';
import delay from 'lodash/delay';
interface ApiResponse {
    data: any
    message: string
    msg: string
    code: number
    isSuccess: boolean
}
export class WXRequestClass {
    constructor() {

    }
    address = process.env.NODE_ENV === 'development' ? "https://meiji.alienwow.cc" : 'https://api.mumeiji.cn';//
    // address = 'https://api.mumeiji.cn';//
    requestConfig = {
        header: {
            'Authorization': '',
            'content-type': 'application/json'
        }
    }
    setToken(token) {
        this.requestConfig.header["Authorization"] = token;
    }
    /**
     * @param params 请求参数
     * @param isdelay 模拟 等待 接口响应太快。加载菊花没转完就消失。
     */
    async request(params: request.Param, isdelay = false): Promise<ApiResponse> {
        const time = Date.now();
        params = cloneDeep(params);
        params.header = { ...this.requestConfig.header, ...params.header }
        params.data = this.compatibleData({ ...params.data })
        params.url = this.compatibleUrl(this.address, params.url);
        const res = await Taro.request(params);
        if (isdelay) {
            await new Promise((res, rej) => {
                delay(res, 400 - (Date.now() - time));
            })
        }
        let isSuccess = true;
        if (res && res.statusCode == 200) {
            if (res.data.code != 200) {
                if (res.data.code >= 500) {
                    Taro.showToast({ title: res.data.msg, icon: "none", duration: 4000 })
                }
                isSuccess = false
            }
        } else {
            if (res.statusCode >= 500) {
                Taro.showToast({ title: "连接超时", icon: "none", duration: 4000 })
            }
            isSuccess = false
        }
        return {
            ...res.data,
            isSuccess
        };
    }
    /**
     * 上传文件
     * @param params 
     */
    async uploadFile(params: uploadFile.Param, mask = true) {
        mask && Taro.showLoading({ title: "上传中", mask: true })
        params.header = {
            "Content-Type": "multipart/form-data"
            , ...params.header
        }
        params.formData = this.compatibleData({ ...params.formData })
        params.url = this.compatibleUrl(this.address, params.url);
        const uploadTask = await Taro.uploadFile(params)
        mask && Taro.hideLoading()
        return JSON.parse(uploadTask.data);
    }
    /**
     * url 兼容处理 
     * @param address 前缀
     * @param url url
     * @param endStr 结尾，参数等
     */
    compatibleUrl(address: string, url: string, endStr?: string) {
        endStr = endStr || ''
        if (/^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/.test(url)) {
            return `${url}${endStr}`;
        }
        else {
            // address  / 结尾  url / 开头
            const isAddressWith = endsWith(address, "/")
            const isUrlWith = startsWith(url, "/")
            // debugger
            if (isAddressWith) {
                if (isUrlWith) {
                    url = trimStart(url, "/")
                }
            } else {
                if (isUrlWith) {

                } else {
                    url = "/" + url;
                }
            }
        }
        return `${address}${url}${endStr}`
    }
    /**
     * 删除 空属性
     * @param data 
     */
    compatibleData(data) {
        Object.keys(data).map(x => {
            const val = data[x]
            if (val == null || val == undefined) {
                delete data[x]
            }
        })
        return data
    }
}
export const WXRequest = new WXRequestClass();