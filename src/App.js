import React, { Component } from 'react';
import classes from './App.css';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import FlowersValley from './containers/FlowersValley/FlowersValley';

import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';
import { connect } from 'react-redux';

const asyncCheckout = asyncComponent(() =>{
  return import('./containers/Checkout/Checkout');
});
const asyncOrders = asyncComponent(() =>{
  return import('./containers/Orders/Orders');
});
const asyncAuth = asyncComponent(() =>{
  return import('./containers/Auth/Auth');
});
const asyncGallery = asyncComponent(() =>{
  return import('./components/Bouquet/FlowersGallery/Gallery');
});

class App extends Component {

  componentDidUpdate() {
    this.props.onAutoTrySign();
  }
  render() {

    let routes = (
      <Switch>

        <Route path="/auth" component={asyncAuth} />
        <Route path="/" exact component={FlowersValley} />

        <Route path="/gallery" component={asyncGallery} />
        <Redirect to="/" />
      </Switch>

    );
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/gallery" component={asyncGallery} />

          <Route path="/orders" component={asyncOrders} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={FlowersValley} />
          <Redirect to="/" />

        </Switch>

      );
    }
    return (
      <div className={classes.container}>


        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }

}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}
const mapToDispatchProps = dispatch => {
  return {
    onAutoTrySign: () => dispatch(actions.authCheckState())

  }
}


export default withRouter(connect(mapStateToProps, mapToDispatchProps)(App));
