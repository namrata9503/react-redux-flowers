import React from 'react';
import classes from './FlowerControl.css';
const flowerControl = (props) => (
    <div className={classes.FlowerControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removed} disabled={props.disabled} >-</button>
        <button className={classes.More} onClick={props.added}>+</button>
      


    </div>
);

export default flowerControl;