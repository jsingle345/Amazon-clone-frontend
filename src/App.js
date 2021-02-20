import React, { useEffect } from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout';
import Login from './Login'
import Payment from './Payment'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { auth } from "./firebase"; 
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe("pk_test_51IMklRGjCDw52nsYZ3A6GMTUkSShTZDQsREYyNQIRP4UwQPESqc3QtsCIFqXKX1vNTjZwg3CGczYzlM71zd5rEHY00wvpkrECi")
//This is a public key from stripe.com in development tab


function App() {
  // BEM - Block, Element, Modifier
  // Can press CTRL + Spacebar to import components
  const [{}, dispatch] = useStateValue(); 

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // console.log("THE USER IS >>> ", authUser); 

      if (authUser) {
        // the user just logged in / the user was logged in 
        dispatch({
          type: "SET_USER", 
          user: authUser
        })
      } else {
        // the user is logged out 
        dispatch({
          type: "SET_USER", 
          user: null 
        })
      }
    })
  }, [])
  // useEffect allows something to happen when the app component loads..., if there is a bracket then this feature will only run once
  // if there is something in the bracket then the useEffect will run again 
  // UseEffect is a dynamic IF statement in react

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
          <Route path="/payment"> 
            <Header />
            <Elements stripe={promise}>  {/* Higher Order Function */}
              <Payment />
            </Elements>
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


// need to install these two for stripe 
        // npm i @stripe/stripe-js
        // npm i @stripe/react-stripe-js