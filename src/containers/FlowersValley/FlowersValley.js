import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import { connect } from 'react-redux';

import Bouquet from '../../components/Bouquet/Bouquet';

import FlowerControls from '../../components/Bouquet/FlowerControls/FlowerControls';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import OrderSummery from '../../components/Bouquet/OrderSummery/OrderSummery';
import axios from '../../axios-orders';

import * as flowerValleyActions from '../../store/actions/index';



class FlowersValley extends Component {

    state = {
        purchasing: false

    }
    componentDidMount() {

        this.props.onInitFlowers();

    }


    updatePurchaseState(flowers) {
        const sum = Object.keys(flowers)
            .map(igKey => {
                return flowers[igKey];
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0);
        return sum > 0;

    }


    // Create handleChange here and pass it to Bouquet as props
    // Use setState instead of mutating state
    handleChange = e => {
        // this.setState({flowers: {[e.target.value]: e.target.value}})
        this.setState({ ...this.state.flowers, [this.state.flowers]: e.target.value });

        // this.addFlowerHandler();
        //  this.setState({ [e.target.value]: e.target.value })

    };

    purchaseHandler = () => {
        if (this.props.isAuthenticated) {
            this.setState({ purchasing: true });

        } else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    }
    purchaseContinueHandler = () => {


         this.props.onInitPurchase();
        this.props.history.push('/checkout');


    }
    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });

    }

    render() {


        const disableInfo = {
            ...this.props.bloom
        };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }

        let orderSummery = null;

        let bouquet = this.props.error ? <p style={{ fontSize: '3rem', textAlign: 'center', fontWeight: 'bold' }}>
            Flowers cannot be loaded ..!!</p> : <Spinner />;
        if (this.props.bloom) {
            bouquet = (
                <Aux>
                    <Bouquet flowers={this.props.bloom}
                        varietyAdded={this.props.onBloomAdded}
                        handleChange={this.handleChange}
                        varietyRemoved={this.props.onBloomRemoved}
                        isAuth={this.props.isAuthenticated}

                        disabled={disableInfo} />



                    {/* make other component and put  + - buttons or count price  in that component */}
                    <FlowerControls

                        disabled={disableInfo}
                        purchasable={this.updatePurchaseState(this.props.bloom)}
                        ordered={this.purchaseHandler}
                        isAuth={this.props.isAuthenticated}
                        price={this.props.price} />
                </Aux>
            );
            orderSummery = <OrderSummery flowers={this.props.bloom}
                price={this.props.price}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />;
        }


        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummery}
                </Modal>

                {bouquet}
            </Aux>
        );
    }

}

const mapStateToProps = state => {

    return {
        bloom: state.flowerValley.flowers,
        price: state.flowerValley.totalPrice,
        error: state.flowerValley.error,
        isAuthenticated: state.auth.token !== null

    }

}
const maDispatchToProps = dispatch => {
    return {
        onBloomAdded: (flName) => dispatch(flowerValleyActions.addIngredient(flName)),
        onBloomRemoved: (flName) => dispatch(flowerValleyActions.removeIngredient(flName)),
        onInitFlowers: () => dispatch(flowerValleyActions.initFlowers()),
        onInitPurchase: () => dispatch(flowerValleyActions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(flowerValleyActions.setAuthRedirectPath(path))

    }
}
export default connect(mapStateToProps, maDispatchToProps)(withErrorHandler(FlowersValley, axios));