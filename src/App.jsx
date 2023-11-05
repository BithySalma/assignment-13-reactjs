// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Home from '../src/pages/Home';
import Service from '../src/pages/Service';
import About from '../src/pages/About';
import Project from '../src/pages/Project';
import Blog from '../src/pages/Blog';
import Contact from '../src/pages/Contact';

function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/service" activeClassName="active">
          Service
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/project" activeClassName="active">
          Project
        </NavLink>
        <NavLink to="/blog" activeClassName="active">
          Blog
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </nav>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/service" component={Service} />
        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
