import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header/Header.jsx';
import Sidenav from '../Sidenav/Sidenav.jsx';
import Home from '../Home/Home.jsx';
//import DetailPost from '../DetailPost/DetailPost.jsx';
//mport EditPost from '../EditPost/EditPost.jsx';
//import Footer from '../Footer/Footer.jsx';

class Layout extends Component {

    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header />
                <Sidenav />
                <Switch>
                    <Route path="/inicio" component={Home} />
                </Switch> 
                

            </div>
        );
    }
}

export default Layout;