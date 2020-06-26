import React from 'react';
import classes from './FlowerControls.css';




const flowerControls = (props) => (
    <div className={classes.FlowerControls}>
        <div className={classes.Orderdata}>
            <h1 className={classes.Heading}> Smart Bouquet </h1>
            <p className={classes.Ordertext}>
                Make your Flowers shopping easy, breezy &amp; smart! See all the items you have bought or liked in one place.
        </p>
        </div>
        <div className={classes.Buy}>
            <p className={classes.Total}>Total Price : $ <strong>{props.price.toFixed(2)}</strong></p>

            <button className={classes.OrderButton}
                disabled={!props.purchasable}

                onClick={props.ordered}  >
                {props.isAuth ? 'ORDER NOW' : 'SIGNUP For Order'}
                {/* <span className={classes.Tooltip}>{!props.isAuth ? 'Add Flowers in Bouquet' : ''}</span> */}
                <span className={classes.Tooltip}>Add Some Flowers from ABOVE</span>
            </button>

        </div>
    </div>
);

export default flowerControls;
