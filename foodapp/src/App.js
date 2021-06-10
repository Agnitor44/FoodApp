import React, {useState, useEffect, createContext, useContext} from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Food from './components/Food'
import Favs from './components/Favs'
import useStickyState from './scripts/stickyState'
import {createStore, subscribe} from 'redux'
import {Provider, useSelector} from 'react-redux'
import Combine from './reducers/comReducer'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";



function App() {


 


  const persistedState = localStorage.getItem('reduxState') 
  ? JSON.parse(localStorage.getItem('reduxState'))
  : []
  const store = createStore(Combine, persistedState)
  store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
// const store = createStore(Combine) 


  return (
<Provider store = {store}>


    <Router>
      <Nav/>
    <Switch>
      <Route exact path = '/' component = {Home} />
      <Route path = '/food/:id' component = {Food} />
      <Route path = '/favs' component = {Favs} />
    </Switch>
    </Router>

    </Provider>
 

  );
}

export default App;
