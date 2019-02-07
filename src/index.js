/* Polyfills features for ie */
import "@babel/polyfill";
import './i18n';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
ReactDOM.render(
  <div>
    <Header />
    <Footer />
  </div>
  ,
  document.getElementById('app')
);
