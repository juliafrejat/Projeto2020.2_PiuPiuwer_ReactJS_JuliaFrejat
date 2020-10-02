import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Feed from '../pages/feed';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Route path="/feed" component={Feed} />
        </BrowserRouter>
    )
}

export default AppRoutes;