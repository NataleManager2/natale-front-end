import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header/Header.jsx';
//import SectionPosts from '../SectionPosts/SectionPosts.jsx';
//import DetailPost from '../DetailPost/DetailPost.jsx';
//mport EditPost from '../EditPost/EditPost.jsx';
//import Footer from '../Footer/Footer.jsx';

class Layout extends Component {

    render() {
        return (
            <div className="Layout">
                <Header />
                {/* <Switch>
                    <Route path="/posts" component={SectionPosts} />
                    <Route path="/post/:id" component={DetailPost} />
                    <Route path="/editPost/:id" component={EditPost} />
                </Switch> */}
            </div>
        );
    }
}

export default Layout;