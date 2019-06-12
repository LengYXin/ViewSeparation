import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { AppTime } from '../test';
// @observer
export default class App extends React.Component<any, any> {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>测试页面</div>
          <AppTime />
          <Link to="/" >跳转</Link>
        </header>
      </div>
    );
  }
}
