import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import classes from './Orders.css';

import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const fetchOrders = [];
                console.log('response ', response.data);

                for (let key in response.data) {
                    fetchOrders.push({
                        ...response.data[key],
                        id: key
                    });
                }

                console.log('fetchOrders ', fetchOrders);

                this.setState({ loading: false, orders: fetchOrders })

            })
            .catch(error => {
                this.setState({ loading: false })
                console.log('fetchOrders error ', error);


            })
    }

    render() {
        console.log('fetchOrders render ', this.state.orders);

        return (
            <div className={classes.Orders}>
                <h3 className={classes.Heading}>Orders</h3>

                {this.state.orders.reverse().map(order => (
                    <Order
                        key={order.id}
                        flowers={order.flowers}
                        price={order.price}
                    />
                ))}

            </div>
        );
    }

}


export default withErrorHandler(Orders, axios);