import React from 'react';

import AppProvider from './context/index';

import GlobalStyle from './syles/global';

import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
