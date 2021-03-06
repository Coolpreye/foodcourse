import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Components/Home';
import SignIn from './Components/SIgnIn';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <Router>

      <Route path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />

    </Router>
  );
}

export default App;
