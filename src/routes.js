import React from 'react';
import { Router, Route } from 'react-router';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import App from './components/App'


const Routes = (props) => (
  <Router {...props}>
     <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;