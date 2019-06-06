import { observer } from 'mobx-react';
import React from 'react';
import './App.css';
import logo from './logo.svg';
import User from './Store';
@observer
export default class App extends React.Component<any, any> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{User.type}名字：{User.name}</h1>
          <button onClick={() => {
            console.log("测试")
            User.onUpdate(`名字-${Math.random()}`)
          }}>更改</button>
        </header>

      </div>
    );
  }
}

