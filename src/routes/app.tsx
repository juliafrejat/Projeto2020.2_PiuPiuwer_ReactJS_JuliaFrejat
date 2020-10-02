import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Redirect from './Redirect';
import Feed from '../pages/feed';


function AppRoutes() {
    return (
        <BrowserRouter>
            <Route path="/feed" component={Feed} />
            <Route component={Redirect} />
        </BrowserRouter>
    )
}

export default AppRoutes;