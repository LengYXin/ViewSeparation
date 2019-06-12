import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import router from './router';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps, any> {
  public render() {
    return (
      <BrowserRouter>
        {router}
      </BrowserRouter>
    );
  }
}
