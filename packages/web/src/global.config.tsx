import { configure, observable } from 'mobx';
import { create, persist } from 'mobx-persist';
// mobx 严格模式 https://cn.mobx.js.org/refguide/api.html
configure({ enforceActions: "observed" });
const hydrate = create({
    storage: window.localStorage,   // 存储的对象
    jsonify: true, // 格式化 json
    debounce: 1000,
});
// 环境变量 开发 模型
const development = process.env.NODE_ENV === "development"
class ConfigStore {
    constructor() {
        hydrate('GlobalConfig', this)
            // post hydration
            .then(() => console.log("TCL: ConfigStore -> constructor -> this", { ...this }))

    }
    /**
    * 开发环境
    */
    development = development;
    target = "/";
    /**
     * 请求头
     */
    headers = {
        credentials: 'include',
        accept: "*/*",
        "Content-Type": "application/json",
        "token": null
    };
    @persist
    @observable
    Token = '';
}
const GlobalConfig = new ConfigStore();

export default GlobalConfig