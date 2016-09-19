import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';

const App = ({children}) => (
  <div className="app">
    <header>
      <HeaderContainer />
    </header>
    {children}
  </div>
);

export default App;
