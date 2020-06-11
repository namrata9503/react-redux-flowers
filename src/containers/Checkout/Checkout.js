import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import classes from './Checkout.css';



class Checkout extends Component {

    
    checkoutCancelledHandler = () => {
        this.props.history.goBack();

    }

    checkoutContinuedHandler = () => {
        
        this.props.history.replace({
            pathname: '/checkout/contact-data',
            hash: '#Contact'
        });
    }

    
    render() {

        let summery = <Redirect to="/" /> 

        if (this.props.bloom) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;

            summery = (
                <div className={classes.Checkout}>
                    {purchasedRedirect}
                    <CheckoutSummery flowers={this.props.bloom}
                        cancelCheckout={this.checkoutCancelledHandler}
                        continueCheckout={this.checkoutContinuedHandler} />
                    <Route className={classes.Contact} path={this.props.match.path + '/contact-data'}
                        component={ContactData} />
                   </div>

            );
        }
        return summery;
    }
}
const mapStateToState = state => {
    return {
        bloom: state.flowerValley.flowers,
        purchased: state.order.purchased
    }
}


export default connect(mapStateToState)(Checkout);