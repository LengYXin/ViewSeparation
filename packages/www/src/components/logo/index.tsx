import * as React from 'react';
import logo from './logo.svg';
import './style.scss';
export interface IAppProps {
}
export default class App extends React.Component<IAppProps, any> {
    public render() {
        return (
            <img src={logo} className="App-logo" alt="logo" />
        );
    }
}
