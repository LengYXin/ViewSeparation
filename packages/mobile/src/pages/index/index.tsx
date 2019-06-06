import { Button, Image, View } from '@tarojs/components';
import { observer } from '@tarojs/mobx';
import Taro, { Component, Config } from '@tarojs/taro';
import User from '../../store/user';
import { ComponentType } from 'react';
import img from '../../img';
import counterStore from '../../store/counter';
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

  increment = () => {
    counterStore.increment()
  }

  decrement = () => {
    counterStore.decrement()
  }

  incrementAsync = () => {
    counterStore.incrementAsync()
  }
  goTo = () => {
    Taro.navigateTo({ url: "/pages/test/index" })
  }
  onUpdate() {
    User.onUpdate(`名字${Math.random()}`)
  }
  render() {
    const { counter, time } = counterStore
    return (
      <View className='index'>
        <View>{User.type}名字：{User.name}</View>
        <Button onClick={this.onUpdate}>更改</Button>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <View>{counter}</View>
        <View>{time}</View>
        <Button onClick={this.goTo}>跳转</Button>
        <Image src={img.wx} />
      </View>
    )
  }
}

export default Index as ComponentType
