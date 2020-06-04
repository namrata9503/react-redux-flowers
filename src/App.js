import React, { Component } from 'react';
import classes from './App.css';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import FlowersValley from './containers/FlowersValley/FlowersValley';
import Checkout from './containers/Checkout/Checkout';
import Gallery from './components/Bouquet/FlowersGallery/Gallery';
import Orders from './containers/Orders/Orders';


class App extends Component {
  render() {
    return (
      <div className={classes.container}>


        <Layout>
          <Switch>
            <Route path="/" exact component={FlowersValley} />

            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders}/>

            <Route path="/gallery" component={Gallery} />


          </Switch>


        </Layout>
      </div>
    );
  }
}

export default App;
