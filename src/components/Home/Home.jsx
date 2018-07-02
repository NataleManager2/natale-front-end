import React, { Component } from 'react';

import SliderHome from '../Home/Slider/Slider.jsx';

class Home extends Component {

    render() {
        return (
            <div className="Home">
                <div className="android-content">
                    <SliderHome />
                </div>
            </div>
        );
    }
}

export default Home;