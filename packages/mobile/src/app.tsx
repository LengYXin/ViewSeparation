import "@tarojs/async-await";
import Taro, { Component, Config } from '@tarojs/taro';
import './app.less';
import Index from './pages/index';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/home/index',
      'pages/user/index',
      'pages/test/index',
    ],
    tabBar: {
      color: "#939393",
      selectedColor: "#DBC389",
      backgroundColor: "#0A0A0A",
      list: [
        {
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "assets/img/home.png",
          selectedIconPath: "assets/img/home-s.png"
        },
        {
          pagePath: "pages/home/index",
          text: "美季MEIJI",
          iconPath: "assets/img/sale.png",
          selectedIconPath: "assets/img/sale-s.png"
        },
        {
          pagePath: "pages/user/index",
          text: "我的",
          iconPath: "assets/img/user.png",
          selectedIconPath: "assets/img/user-s.png"
        }
      ]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
