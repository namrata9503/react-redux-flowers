import React from 'react';
import classes from './Order.css';

const order = (props) => {
    const flowers = [];
    for (let flowerName in props.flowers) {
        flowers.push(

            {
                name: flowerName,
                amount: props.flowers[flowerName]
            })

    }
    let flowerOutput= flowers.map(ig => {
        return <span key={ig.name}
        >{ig.name} ({ig.amount}) </span>
        })
    return (
        <div className={classes.Order}>
            <p className={classes.OrderFlowers}>FLOWERS: {flowerOutput}</p>
            <p>Price: <strong>Euro: {Number.parseFloat(props.price).toFixed(2)} </strong></p>
        </div>
    );


};
export default order;