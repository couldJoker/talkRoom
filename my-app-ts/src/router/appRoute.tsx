import * as React from 'react';
import { HashRouter, Switch, Route  } from 'react-router-dom';
import Friends from '../views/friendsList/index';
/**
 * 路由文件
 */
export default function router() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/friends" component={Friends} />
            </Switch>
        </HashRouter>
    );
}
