import { observer } from 'mobx-react';
import React from 'react';
import Logo from 'components/logo';
import './style.scss';
import User from 'store/user';
import Time from 'store/time';
// @observer
export default class App extends React.Component<any, any> {

  render() {
    console.log('render App')
    return (
      <div className="App">
        <header className="App-header">
          <Logo/>
          <AppTime />
          <AppName />
          <button onClick={() => {
            User.onUpdate(`名字-${Math.random()}`)
          }}>更改</button>
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
class AppTime extends React.Component<any, any> {
  render() {
    console.log('render AppTime')
    return (
      <h1>时间：{Time.currentTime}</h1>
    );
  }
}
