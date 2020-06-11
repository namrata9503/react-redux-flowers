import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidebar from '../Navigation/Sidebar/Sidebar';

import classes from './Layout.css';
import { connect } from 'react-redux';

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
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    sidebarToggleClicked={this.sidebarToggleHandler} />
                <Sidebar open={this.state.showSidebar}
                    isAuth={this.props.isAuthenticated}

                    closed={this.sidebarClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>

        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);