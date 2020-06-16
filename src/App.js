import React from 'react';
import Home from './Home'
import NavBar from './NavBar';
import About from './About'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Contact from './Contact'
import Skills from './Skills'
import Portfolio from './Portfolio'
import ContactSuccess from './ContactSuccess'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path = '/resume' component ={Home} />
          <Route path = '/about' component={About} />
          <Route path = '/contact' component={Contact} />
          <Route path = '/skills' component={Skills} />
          <Route path = '/portfolio' component={Portfolio} />
          <Route path = '/contact-success' component={ContactSuccess} />
        </Switch>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
