import React from 'react';

import Routes from './routes/';

import GlobalStyle from './assets/styles/global';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <AppProvider>
      <GlobalStyle />
      <Routes />
    </AppProvider>
  );
}

export default App;
