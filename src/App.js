import React from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout';
import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  // BEM - Block, Element, Modifier
  // Can press CTRL + Spacebar to import components
  return (
    <Router> 
      <div className="app">
        
        <Switch> 
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout"> 
            <Header />
            <Checkout />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
        
        {/* Home */}
      </div>
    </Router>
    
  );
}

export default App;
