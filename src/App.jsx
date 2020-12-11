import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header'
import StoreProvider from './store/StoreProvider';
import AsideMenu from './components/AsideMenu/AsideMenu';

import './App.scss';

const App = () => (
  <StoreProvider>
    <Header />
    <Router>
      <div className="content-wrapper">
        <AsideMenu />
      </div>
    </Router>
  </StoreProvider>
);

export default App;