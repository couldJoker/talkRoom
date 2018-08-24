import React from 'react';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';
import FriendList from './Talk/friendLsit/index';
import PersonalIndex from './Talk/personalIndex/index';

export default function router() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/friends" component={FriendList}></Route>
        <Route path="/myTalk" component={PersonalIndex}></Route>
      </Switch>
    </HashRouter>
  )
}