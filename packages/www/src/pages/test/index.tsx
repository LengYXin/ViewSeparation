import Logo from 'components/logo';
import { observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Time from 'store/time';
import User from 'store/user';
import './style.scss';
import globalconfig from 'global.config';
// @observer
export default class App extends React.Component<any, any> {
  componentDidMount() {
    console.log("TCL: App -> componentDidMount -> globalconfig", globalconfig)
  }
  render() {
    console.log('render App')
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <AppTime />
          <AppName />
          <button onClick={() => {
            User.onUpdate(`名字-${Math.random()}`)
          }}>更改</button>
          <Link to="/page" >跳转</Link>
          <Link to="/page/1" >跳转（参数）</Link>
        </header>
      </div>
    );
  }
}
@observer
class AppName extends React.Component<any, any> {
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  UNSAFE_componentWillReceiveProps() {
    console.log('UNSAFE_componentWillReceiveProps')
  }
  UNSAFE_componentWillMount() {
    console.log('UNSAFE_componentWillMount')
  }
  UNSAFE_componentWillUpdate() {
    console.log('UNSAFE_componentWillUpdate')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  componentDidCatch() {
    console.log('componentDidCatch')
  }
  render() {
    console.log('render AppName')
    return (
      <h1>{User.type}名字：{User.name}</h1>
    );
  }
}

@observer
export class AppTime extends React.Component<any, any> {
  render() {
    console.log('render AppTime')
    return (
      <h1>时间：{Time.currentTime}</h1>
    );
  }
}
