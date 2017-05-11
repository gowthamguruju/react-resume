import React from 'react';
import ReactDOM from 'react-dom';
import { Route, browserHistory } from 'react-router';
import Routes from './routes';
import Layout from './components/Layout'

import './index.css';

ReactDOM.render(
  <Layout>
  <Routes history={browserHistory}/>
  </Layout>,
  document.getElementById('root')
);
