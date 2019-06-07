import { Button, Image, View } from '@tarojs/components';
import { observer } from '@tarojs/mobx';
import Taro, { Component, Config } from '@tarojs/taro';
import User from '../../store/user';
import Time from '../../store/time';
import { ComponentType } from 'react';
import img from '../../img';
import './index.less';
@observer
class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页2'
  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  goTo = () => {
    Taro.navigateTo({ url: "/pages/test/index" })
  }
  onUpdate() {
    User.onUpdate(`名字${Math.random()}`)
  }
  render() {
    const { type, name } = User;
    const { currentTime } = Time;
    return (
      <View className='index'>
        <View>{type}名字：{name}</View>
        <Button onClick={this.onUpdate}>更改</Button>
        <View>{currentTime}</View>
        <Button onClick={this.goTo}>跳转</Button>
        <Image src={img.wx} />
      </View>
    )
  }
}

export default Index as ComponentType
