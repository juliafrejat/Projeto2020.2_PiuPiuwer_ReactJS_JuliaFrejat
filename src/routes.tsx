import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Feed from './pages/feed';
import Login from './pages/login';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Feed} />
        </BrowserRouter>
    )
}

export default Routes;