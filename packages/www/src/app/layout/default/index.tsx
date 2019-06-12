import * as React from 'react';
import Content from "./content";
import Header from "./header";

export default class App extends React.Component<any, any> {
  public render() {
    return (
      <>
        <Header {...this.props} />
        <Content  {...this.props} />
      </>
    );
  }
}
