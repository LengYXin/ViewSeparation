import { EntitiesTimeStore, EntitiesUserStore } from '@leng/public/src';
import lodash from 'lodash';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
export interface IAppProps {
    UserStore?: EntitiesUserStore,
}
@inject('UserStore')
@observer
export default class App extends React.Component<IAppProps> {
    componentDidMount() {
        console.log("TCL: App -> componentDidMount -> this.props", this.props)
    }
    public render() {
        return (
            <div>
                <h1>{this.props.UserStore.name}</h1>
                <button onClick={() => this.props.UserStore.onUpdate()}>更改姓名</button>
            </div>
        );
    }
}
