import React from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  // BEM - Block, Element, Modifier
  // Can press CTRL + Spacebar to import components
  return (
    <Router> 
      <div className="app">
        <Header />
        <Switch> 
          <Route path="/checkout"> 
            <Checkout />
          </Route>
          <Route path='/'>
            
            
            <Home />
          </Route>
        </Switch>
        
        {/* Home */}
      </div>
    </Router>
    
  );
}

export default App;
