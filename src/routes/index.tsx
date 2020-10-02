import React from 'react';

import AuthRoutes from './auth';
import AppRoutes from './app';

import { useAuth } from '../hooks/useAuth';

const Routes: React.FC = () => {
    const { token } = useAuth();
    
    if (token) {
        return <AppRoutes />
    } else {
        return <AuthRoutes />
    }
};

export default Routes;