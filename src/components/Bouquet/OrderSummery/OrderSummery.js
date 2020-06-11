import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
import classes from './OrderSummery.css';



const orderSummery = (props) => {

    const flowerSummery = Object.keys(props.flowers)
        .map(flKey => {
            return (
                <li key={flKey}>
                    {flKey} : {props.flowers[flKey]}
                </li>);
        });
    return (
        <Aux>
            <h3 className={[classes.Heading, classes.Center].join(' ')}>Your Order</h3>
            <p className={[classes.text, classes.Center].join(' ')}>Your Beautiful bloomy Bouquet Flowers are : </p>
            <ul className={classes.List}>
                {flowerSummery}
            </ul>
            <p className={[classes.Heading, classes.Center].join(' ')}><strong>    Total Price : {props.price.toFixed(2)}</strong></p>
            <p className={[classes.text,  classes.Center].join(' ')}>Continue to checkout?</p>
            <div className={classes.Btn}>
            <Button btnType="Danger" clicked= {props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked= { props.purchaseContinued}>CONTINUE</Button>
            </div>
          
        </Aux>
    );

};

export default orderSummery;