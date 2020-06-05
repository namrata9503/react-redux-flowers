import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import Bouquet from '../../components/Bouquet/Bouquet';
import classes from './Checkout.css';

import axios from '../../axios-orders';

class Checkout extends Component {


    // state = {
    //     flowers: null,
    //     price: 0
    // }

    // componentWillMount() {
    //     const query = new URLSearchParams(this.props.location.search);
    //     console.log('checkout  query ', query);

    //     const flowers = {};
    //     let price = 0;
    //     for (let param of query.entries()) {
    //         console.log('checkout  query entries ', query.entries());
    //         console.log('checkout   param ', param);

    //         if (param[0] === 'price') {
    //             price = param[1];
    //             console.log('checkout   param[1] ', param[1]);

    //         }
    //         else {
    //             flowers[param[0]] = +param[1];
    //             console.log('checkout    flowers[param[0]] ',  flowers[param[0]]);


    //         }

    //     }



    //     this.setState({ flowers: flowers, totalPrice: price });
    // }


    checkoutCancelledHandler = () => {
        this.props.history.goBack();

    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render() {
        return (
            <div className={classes.Checkout}>
                {/* <Bouquet flowers={this.state.flowers}
                    /> */}
                <CheckoutSummery flowers={this.props.bloom}
                    cancelCheckout={this.checkoutCancelledHandler}
                    continueCheckout={this.checkoutContinuedHandler} />
                <Route path={this.props.match.path + '/contact-data'}
                    component={ContactData} />)}
                />
            </div>
        );
    }
}
const mapStateToState = state => {
    return {
        bloom : state.flowers
    }
}
export default connect(mapStateToState)(Checkout);