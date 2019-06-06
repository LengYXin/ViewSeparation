import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text,Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import counterStore from '../../store/counter'
import img from '../../img'
import './index.less'
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
  render() {
    const { counter, time } = counterStore
    return (
      <View className='index'>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <View>{counter}</View>
        <View>{time}</View>
        <Button onClick={this.goTo}>跳转</Button>
        <Image src={img.wx}/>
      </View>
    )
  }
}

export default Index as ComponentType
