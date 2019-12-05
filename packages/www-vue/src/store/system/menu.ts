/**
 * @author 冷 (https://github.com/LengYXin)
 * @email lengyingxin8966@gmail.com
 * @create date 2018-09-12 18:52:54
 * @modify date 2018-09-12 18:52:54
 * @desc [description]
*/
// import { MenuDataItem } from '@ant-design/pro-layout';
import Regular from 'utils/Regular';
import { action, observable, runInAction, computed } from "mobx";
import lodash from 'lodash';
import User from './user';
import globalConfig from 'global.config';
interface MenuDataItem {
    authority?: string[] | string;
    children?: MenuDataItem[];
    hideChildrenInMenu?: boolean;
    hideInMenu?: boolean;
    icon?: string;
    locale?: string;
    name?: string;
    path: string;
    [key: string]: any;
}
class Store {
    constructor() {
    }
    /** 菜单展开 收起 */
    @observable collapsed = lodash.get(globalConfig, 'collapsed', true);
    /** 菜单 */
    @observable subMenu: any[] = [];
    // 平行数据菜单
    ParallelMenu: any[] = [];
    /**
     * 获取菜单
     */
    async onInitMenu(menu: any[]) {
        if (globalConfig.development) {
            menu = await import("../../subMenu.json").then(x => x.default);
        }
        menu = lodash.map(menu, data => {
            // 跨域页面
            if (Regular.url.test(data.Url)) {
                data.Url = "/external/" + encodeURIComponent(data.Url);
            } else
                // public 下的 pages 页面
                if (lodash.startsWith(data.Url, globalConfig.staticPage)) {
                    data.Url = "/external/" + encodeURIComponent(lodash.replace(data.Url, globalConfig.staticPage, `${window.location.origin}`));
                }
            return data;
        })
        this.setSubMenu(menu);
    }
    /**
     * 递归 格式化 树
     * @param datalist 
     * @param ParentId 
     * @param children 
     */
    recursionTree(datalist, ParentId, children: MenuDataItem[] = []) {
        lodash.filter(datalist, ['ParentId', ParentId]).map(data => {
            data.Children = this.recursionTree(datalist, data.Id, data.Children || []);
            children.push({
                key: data.Id,
                path: data.Url,
                name: data.Text,
                icon: data.Icon || "pic-right",
                children: data.Children,
                ...data
            });
        });
        return children;
    }
    /**  设置菜单 */
    @action.bound
    setSubMenu(subMenu) {
        this.ParallelMenu = subMenu.map(data => {
            return {
                ...data,
                key: data.Id,
                path: data.Url,
                name: data.Text,
                icon: data.Icon || "pic-right",
                // children: data.Children
            }
        });
        const menu = this.recursionTree(subMenu, null, []);
        console.log(menu)
        this.subMenu = menu
    }
    /**
   * 菜单 展开收起
   */
    @action
    onCollapsed(collapsed = !this.collapsed) {
        this.collapsed = collapsed;
        // 主动触发 浏览器 resize 事件
        dispatchEvent(new CustomEvent('resize'));
    }
    @computed
    get collapsedWidth() {
        return this.collapsed ? 80 : 250;
    }

}
export default new Store();