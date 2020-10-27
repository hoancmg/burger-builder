import React, { Component } from 'react';
import Aux from '../../hoc/Auxx';
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux >
        );
    }
};

export default Layout;