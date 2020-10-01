import React from 'react';
import Routes from './routes/routes';
import GlobalStyle from './assets/styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
