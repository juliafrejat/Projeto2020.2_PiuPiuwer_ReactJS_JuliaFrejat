import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Feed from '../pages/feed';
import Login from '../pages/login';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/feed" component={Feed} />
            <Route path="/login" component={Login} />
        </BrowserRouter>
    )
}

export default Routes;