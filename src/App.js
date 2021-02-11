import React from 'react'
import Header from './Header'
import Home from './Home'
import './App.css';

function App() {
  // BEM - Block, Element, Modifier
  return (
    <div className="app">
      <Header />
      <Home />
      {/* Home */}
    </div>
  );
}

export default App;
