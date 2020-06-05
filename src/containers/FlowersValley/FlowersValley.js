import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import {connect} from 'react-redux';

import Bouquet from '../../components/Bouquet/Bouquet';
import Varieties from '../../components/Bouquet/FlowerVarieties/Varieties';

import FlowerControls from '../../components/Bouquet/FlowerControls/FlowerControls';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import OrderSummery from '../../components/Bouquet/OrderSummery/OrderSummery';
import Gallery from '../../components/Bouquet/FlowersGallery/Gallery';
import axios from '../../axios-orders';
import FlowerVariety from '../../components/Bouquet/FlowerVarieties/FlowerVariety/FlowerVariety';
import FlowerVarieties from '../../components/Bouquet/FlowerVarieties/FlowerVarieties';
import * as actionTypes from '../../store/actions';



class FlowersValley extends Component {

    state = {
        purchasing: false,
        loading: false,
        error: false

    }
    componentDidMount() {
        console.log(this.props);
        // axios.get('https://flowers-valley.firebaseio.com/flowers.json')
        //     .then(resp => {
        //         this.setState({ flowers: resp.data });
        //     })
        //     .catch(error => {
        //         this.setState({ error: true });
        //     });
    }


    updatePurchaseState(flowers) {
        const sum = Object.keys(flowers)
            .map(igKey => {
                return flowers[igKey];
            })
            .reduce((sum, el) => {
                console.log('el ' + el);
                return sum + el
            }, 0);
        return  sum > 0 ;

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
        this.setState({ purchasing: true });
    }
    purchaseContinueHandler = () => {
   


        this.props.history.push('/checkout');

    }
    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });

    }

    render() {
       // console.log("render : ", this.state.flowers);


        const disableInfo = {
            ...this.props.bloom
        };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }

        let orderSummery = null;

        let bouquet = this.state.error ? <p style={{ fontSize: '3rem', textAlign: 'center', fontWeight: 'bold' }}>
            Flowers cannot be loaded ..!!</p> : <Spinner />;
        if (this.props.bloom) {
            bouquet = (
                <Aux>
                    <Bouquet flowers={this.props.bloom}
                     varietyAdded={this.props.onBloomAdded}
                     handleChange={this.handleChange}
                     varietyRemoved={this.props.onBloomRemoved}
                     disabled={disableInfo} />

                    {/* <FlowerVariety

                       
                    >
                        <FlowerVarieties
                        flowers={this.state.flowers}
                        />
                        <Varieties
                         varietyAdded={this.addFlowerHandler}
                         handleChange={this.handleChange}
                         varietyRemoved={this.removeFlowersHandler}
                         disabled={disableInfo}
                        />
                    </FlowerVariety> */}

                    {/* make other component and put  + - buttons or count price  in that component */}
                    <FlowerControls
                      
                        disabled={disableInfo}
                        purchasable={this.updatePurchaseState(this.props.bloom)}
                        ordered={this.purchaseHandler}
                        price={this.props.price} />
                </Aux>
            );
            orderSummery = <OrderSummery flowers={this.props.bloom}
                price={this.props.price}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />;
        }
        if (this.state.loading) {
            orderSummery = <Spinner />
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

    return{
        bloom : state.flowers,
        price: state.totalPrice

    }

}
const maDispatchToProps = dispatch => {
    return{
        onBloomAdded : (flName) => dispatch({type: actionTypes.ADD_FLOWER, flowerName: flName}),
        onBloomRemoved : (flName) => dispatch({type: actionTypes.REMOVE_FLOWER, flowerName: flName})

    }
}
export default connect(mapStateToProps,maDispatchToProps)(withErrorHandler(FlowersValley, axios));