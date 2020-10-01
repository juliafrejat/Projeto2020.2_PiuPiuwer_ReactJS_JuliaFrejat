import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Feed from '../pages/feed';
import Login from '../pages/login';

function Routes() {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Feed} />
        </Switch>
    )
}

export default Routes;