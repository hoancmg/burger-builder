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

    sideDrawToggleHandler = () => {
        this.setState((prevState) => {
            return  {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawToggleHandler} />
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