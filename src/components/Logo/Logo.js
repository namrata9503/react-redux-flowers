import React from 'react';
import FlowerLogo from '../../assets/images/my-logo.png';

import classes from './Logo.css'
const logo =(props)=>(
    <div className={classes.Logo}>
        <img src={FlowerLogo} alt=" flower logo"/>
    </div>

);

export default logo;