import React from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  // BEM - Block, Element, Modifier
  return (
    <Router> 
      <div className="app">
        
        <Switch> 
          <Route path="/checkout"> 
            <Header />
            <h1>I AM THE CHECKOUT PAGE</h1>
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
