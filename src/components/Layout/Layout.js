import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidebar from '../Navigation/Sidebar/Sidebar';

import classes from './Layout.css';

class Layout extends Component {

    state = {
        showSidebar: false
    }

    sidebarClosedHandler = () => {
        this.setState({ showSidebar: false });
    }
    sidebarToggleHandler = () => {
        this.setState((prevState) => {
            return { showSidebar: !prevState.showSidebar };
        })
    }
    render() {
        return (
            <Aux>
                <Toolbar sidebarToggleClicked={this.sidebarToggleHandler} />
                <Sidebar open={this.state.showSidebar}
                    closed={this.sidebarClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>

        );
    }
}

export default Layout;