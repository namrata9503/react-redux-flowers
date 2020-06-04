
import React, { Component } from 'react';
import classes from './CheckoutSummery.css';
import Bouquet from '../../Bouquet/Bouquet';
import Button from '../../UI/Button/Button';
import getData from '../../Bouquet/data';
import FlowerVarieties from '../../Bouquet/FlowerVarieties/FlowerVarieties';
import FlowerVariety from '../../Bouquet/FlowerVarieties/FlowerVariety/FlowerVariety';
import Varieties from '../../Bouquet/FlowerVarieties/Varieties';


class CheckoutSummery extends Component {

    // checkout = Object.keys(this.props.flowers)
    //     .map(flKey => {
    //         console.log('check summery : ', this.props.flowers);
    //         return (
    //             <div key={flKey}
    //                 className={classes.Items}>
    //                 {flKey}: {this.props.flowers[flKey]}
    //             </div>
    //         );


    //     });

    constructor(props) {
        super(props)
        this.state = {
            controls: [],
        }
    }
    componentDidMount() {
        this.setState({ controls: getData() }, () => {
            //  this.calculateTotal()
            // console.log('controls ', this.state.controls)
        })

    }

    render() {
        // console.log('flowers check price  ', this.props.flowers);

       // let checkoutPrice = null;
        for (let flowerCheckout in this.props.flowers) {
            console.log('flowers check c   ', flowerCheckout, this.props.flowers[flowerCheckout]);
            // if (this.props.flowers[flowerCheckout] == 0) {


            //     <FlowerVarieties style={{display : 'none'}}



            //     />

            // }

            //  if (this.props.flowers[flowerCheckout] >= 1) {
            //  checkoutPrice = (this.state.controls.map(ctrl => (

            return (


                <div className={classes.CheckoutSummery}>


                    <h1  className={classes.Heading}>We hope you will like This BOUQUET..!!</h1>
                    <div className={classes.ContainerBtn}>
                    <Button
                        clicked={this.props.cancelCheckout} btnType="Danger">CANCEL</Button>
                    <Button
                        clicked={this.props.continueCheckout} btnType="Success">NEXT</Button>
                    </div>
                    
                    <div className={classes.Items} >

                        {this.state.controls.map(ctrl => (

                            <FlowerVarieties

                                flowers={this.props.flowers[ctrl.type]}
                                 key={ctrl.name}
                                label={ctrl.label}
                              name={ctrl.name}
                                price={ctrl.price}


                            />


                        ))}

                </div>
               

                    {/* <Bouquet flowers={this.props.flowers}
                        key={this.props.name}
                        label={this.props.label}
                        name={this.props.name}
                            /> */}
                </div>
            );
        }



    };
}

    export default CheckoutSummery;