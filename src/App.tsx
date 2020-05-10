import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from './context/index';

import GlobalStyle from './syles/global';

import Routes from './routes/index';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
