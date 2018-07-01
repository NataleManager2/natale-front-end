import React, { Component } from 'react';

import logo from '../../../images/logo-natale.png';

import Navbar from '../Navbar/Navbar.jsx';
import Menu from '../../Shared/Menu/Menu.jsx';
import Search from '../../Shared/Search/Search.jsx';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="android-header mdl-layout__header mdl-layout__header--waterfall">
                    <div className="mdl-layout__header-row">
                        <span className="android-title mdl-layout-title">
                            <img className="android-logo-image" src={logo} />
                        </span>

                        <div className="android-header-spacer mdl-layout-spacer"></div>
                        <div className="android-search-box mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width">
                            <Search />
                        </div>

                        <Navbar />
                        <span className="android-mobile-title mdl-layout-title">
                            <img className="android-logo-image" src={logo} />
                        </span>
                        <button className="android-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" id="more-button">
                            <i className="material-icons">more_vert</i>
                        </button>
                        <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" htmlFor="more-button" >
                            <Menu />
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
