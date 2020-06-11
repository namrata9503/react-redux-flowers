import React from 'react';

import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = (props) => (
    <ul className={classes.NavigationItems} >
        <NavigationItem link="/" exact >FlowersValley</NavigationItem>
       { props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}

        <NavigationItem link="/gallery">Gallery</NavigationItem>
        { !props.isAuthenticated ? 
        <NavigationItem link="/auth">Login</NavigationItem> : <NavigationItem link="/logout">LOGOUT</NavigationItem> } 


    </ul>
);

export default navigationItems;