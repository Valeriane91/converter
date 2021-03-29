
// == Import npm
import React from 'react';


import Header from 'src/components/Header';
import Mains from 'src/components/Mains';
import Footer from 'src/components/Footer';
import './styles.scss';

// == Composant
import currencies from 'src/data/currencies';


const App = () => (
  <div className="app">
    <Header />
    <Mains mains={currencies.mains} />
    <Footer />
  </div>
);

// == Export
export default App;
