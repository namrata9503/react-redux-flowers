import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import classes from './Orders.css';

import axios from '../../axios-orders';
import * as ordersActions from '../../store/actions/index';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {

  

    componentDidMount() {
        // axios.get('/orders.json')
        //     .then(response => {
        //         const fetchOrders = [];
        //         console.log('response ', response.data);

        //         for (let key in response.data) {
        //             fetchOrders.push({
        //                 ...response.data[key],
        //                 id: key
        //             });
        //         }

        //         console.log('fetchOrders ', fetchOrders);

        //         this.setState({ loading: false, orders: fetchOrders })

        //     })
        //     .catch(error => {
        //         this.setState({ loading: false })
        //         console.log('fetchOrders error ', error);


        //     })

        this.props.onFetchOrders(this.props.token, this.props.userId);
    }

    render() {
        let orders = <Spinner/>;
        if(!this.props.loading){
            orders =    this.props.orders.reverse().map(order => (
                <Order
                    key={order.id}
                    flowers={order.flowers}
                    price={order.price}
                />
            ))
        }

        return (
            <div className={classes.Orders}>
                <h3 className={classes.Heading}>Orders</h3>

             {orders}

            </div>
        );
    }

}

const mapStateToProps = state => {
    return{
        orders:state.order.orders,
        loading:state.order.loading,
        token:state.auth.token,
        userId : state.auth.userId
    };
}
const mapDispatchToProps = dispatch => {
    return{
            onFetchOrders : (token, userId) => dispatch(ordersActions.fetchOrders(token, userId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));