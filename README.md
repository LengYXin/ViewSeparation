# 业务视图 分离
> 项目中所有状态都用mobx 存储 <br/>
> 公共状态为单独的项目 在其他端项目中继承使用<br/>
> 端项目 分为 pc 小程序 等 视图层<br/>
> 在不区分框架的基础上提供 业务 视图 分离<br/>

# 目录结构
> packages>assets 公共资源<br/>
> packages>entities 公共状态 （实体模型状态管理）<br/>
> packages>mobile 手机端&小程序端 <br/>
> packages>web Vue 测试站点<br/>
> packages>www React 测试站点<br/>

# entities （实体模型状态管理）
> 开发中 业务为相同 部分。抽离业务代码。在多端使用。提供复用性。
# mobile 小程序端
> 使用mobx 状态管理 管理组件状态，继承 entities 状态管理使用
# web vue 程序
> 使用mobx 状态管理 管理组件状态，继承 entities 状态管理使用
# www react 程序
> 使用mobx 状态管理 管理组件状态，继承 entities 状态管理使用


# 使用须知
> 全局安装 lerna 模块 npm i -d -g lerna <br/>
> 小程序端 用到了 Taro 也得需要一个全局包  npm i -d -g @tarojs/cli<br/>
> 安装完成 在项目根目录中执行 npm run init 安装当前工程下的所有依赖<br/>
> 对于 packages 中的项目安装依赖。使用  lerna add module --scope=module 列如 给 web 安装一个依赖包 lerna add test --scope=@leng/web  （@leng/web  为 项目 package.json 中的name ）<br/>
> 本地项目相互依赖 使用 lerna add module-1 --scope=module-2  列如 web 中的 @leng/entities 引用的是 packages>entities<br/>
> packages>entities 为 其他项目提供的 依赖包。需要编译后 使用。实际引用的是 packages>entities>lib下面的js模块 src 为开发 源代码<br/>
> packages>entities 项目编译 后 引入的项目不需要 手动更新依赖。lerna 会自动更新<br/>
> 

# 优缺点介绍
![案例](https://github.com/LengYXin/ViewSeparation/blob/master/docs/images/youquedian.jpg)

# 测试位置 （每个项目中的 这个位置）

![案例](https://github.com/LengYXin/ViewSeparation/blob/master/docs/images/WX20190606-181711.png)
