import * as React from 'react';
import { renderRoutes } from 'react-router-config';

export default class App extends React.Component<any, any> {
  componentDidMount() {
  }
  renderRoutes = renderRoutes(this.props.route.routes);
  public render() {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        {this.renderRoutes}
      </React.Suspense>
    );
  }
}
