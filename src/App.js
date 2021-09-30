import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import { Postcode } from './components/Postcode';


import './custom.css'





export default class App extends Component {
  static displayName = App.name;



  render () {

    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/postcode' component={Postcode} />
        <Route path='/counter' component={Counter} />
      </Layout>
    );
  }
}

