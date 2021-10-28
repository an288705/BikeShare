import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import HomeScreen from './View/home/homeScreen';
import Navbar from './View/navbar/navbar';

function App() {
  /* Set up routing at app level in App.js */
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact><HomeScreen/></Route>
      </Switch>
    </Router>
  );
}

export default App;
