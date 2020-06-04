import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';

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

const FLOWER_PRICES = {
    pink: 0.5,
    yellow: 0.6,
    purple: 0.8,
    white: 0.3,
    rose: 0.3,
    orange: 0.7,
    sunflower: 0.3,
    smallPink: 0.7,
    samll: 0.6,
    petal: 0.2,
    dark: 0.4,
   
    yellowRose: 0.4,
    blue: 0.9,
    red: 0.1,
    multiPink: 1.4
}


class FlowersValley extends Component {

    state = {
        flowers: null,
        totalPrice: 0,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false

    }
    componentDidMount() {
        console.log(this.props);
        axios.get('https://flowers-valley.firebaseio.com/flowers.json')
            .then(resp => {
                this.setState({ flowers: resp.data });
            })
            .catch(error => {
                this.setState({ error: true });
            });
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
        console.log('sum ' + sum);
        this.setState({ purchasable: sum > 0 });

    }

    addFlowerHandler = (type) => {
        // e.preventDefault();
        const oldCount = this.state.flowers[type];
        const updatedCount = oldCount + 1;


        const updatedFlowers = {
            ...this.state.flowers
        };

        updatedFlowers[type] = updatedCount;
        console.log('up type: ', updatedFlowers[type]);


        const priceAddition = FLOWER_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ totalPrice: newPrice, flowers: updatedFlowers });
        this.updatePurchaseState(updatedFlowers);
    }
    // Create handleChange here and pass it to Bouquet as props
    // Use setState instead of mutating state
    handleChange = e => {
        // this.setState({flowers: {[e.target.value]: e.target.value}})
        this.setState({ ...this.state.flowers, [this.state.flowers]: e.target.value });

        // this.addFlowerHandler();
        //  this.setState({ [e.target.value]: e.target.value })

    };
    removeFlowersHandler = (type) => {

        const oldCount = this.state.flowers[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedFlowers = {
            ...this.state.flowers
        };
        updatedFlowers[type] = updatedCount;
        const priceSubtraction = FLOWER_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubtraction;

        this.setState({ totalPrice: newPrice, flowers: updatedFlowers });
        this.updatePurchaseState(updatedFlowers);
    }
    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }
    purchaseContinueHandler = () => {
        // alert('Continue..');

        // this.setState({ loading: true });
        // const order = {
        //     flowers: this.state.flowers,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'nams',
        //         address: {
        //             zipcode: '1181',
        //             street: 'test',
        //             country: 'NL'
        //         },
        //         email: 'nams@gmail.com'
        //     },
        //     deliveryMethod: 'fastest'
        // }
        // axios.post('/orders.json', order)
        //     .then(resp => {
        //         this.setState({ loading: false, purchasing: false });
        //     })
        //     .catch(error => {
        //         this.setState({ loading: false, purchasing: false });
        //     });


        const queryParams = [];
        for (let i in this.state.flowers) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.flowers[i]));
        }

        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });

    }
    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });

    }

    render() {
        console.log("render : ", this.state.flowers);


        const disableInfo = {
            ...this.state.flowers
        };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }

        let orderSummery = null;

        let bouquet = this.state.error ? <p style={{ fontSize: '3rem', textAlign: 'center', fontWeight: 'bold' }}>
            Flowers cannot be loaded ..!!</p> : <Spinner />;
        if (this.state.flowers) {
            bouquet = (
                <Aux>
                    <Bouquet flowers={this.state.flowers}
                     varietyAdded={this.addFlowerHandler}
                     handleChange={this.handleChange}
                     varietyRemoved={this.removeFlowersHandler}
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
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                        price={this.state.totalPrice} />
                </Aux>
            );
            orderSummery = <OrderSummery flowers={this.state.flowers}
                price={this.state.totalPrice}
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
export default withErrorHandler(FlowersValley, axios);