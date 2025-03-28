import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import SignOut from './components/SignOut';
import About from './components/About';
import Signin from './pages/Signin';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/profile" component={Profile} />
        <Route path="/signout" component={SignOut} />
        <Route path="/about" component={About} />
      </Switch>
      <Signin />
    </div>
  );
}

export default App;
