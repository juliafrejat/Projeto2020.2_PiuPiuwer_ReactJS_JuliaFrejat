import React from 'react';
//import { PiusProvider } from './pius';

import { AuthProvider } from './useAuth';

const AppProvider: React.FC = ({ children }) => {
    return (
        <AuthProvider>
            {/* <PiusProvider> */}
                {children}
            {/* </PiusProvider> */}
        </AuthProvider>
    )
}

export default AppProvider;