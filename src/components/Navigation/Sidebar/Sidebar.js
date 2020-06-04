import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Sidebar.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';


const sidebar = (props) => {


    let attachedClasses = [classes.Sidebar, classes.Close];
    if (props.open) {
        attachedClasses = [classes.Sidebar, classes.Open];
    }

    return (
        <Aux>

            <Backdrop show={props.open} clicked={props.closed} />

            <div className={attachedClasses.join(' ')}  >
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav className={classes.sidenav}>
                    <NavigationItems />
                </nav>
            </div>

        </Aux>
    );
}

export default sidebar;