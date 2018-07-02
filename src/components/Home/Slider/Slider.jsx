import React, { Component } from 'react';
import Slider from "react-slick";

import Slide from './Slider.css';

import img1 from '../../../assets/images/slide-1.jpg';
import img2 from '../../../assets/images/slide-2.jpg';
import img3 from '../../../assets/images/slide-3.jpg';
import img4 from '../../../assets/images/slide-4.jpg';
import img5 from '../../../assets/images/slide-5.jpg';



class SliderHome extends Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
        };
        return (
            <Slider className="Slide" {...settings} >
                <div className="slide">
                    <img src={img1}  alt="slide" />
                </div>
                <div className="slide">
                    <img src={img2}  alt="slide" />
                </div>
                <div className="slide">
                    <img src={img3}  alt="slide" />
                </div>
                <div className="slide">
                    <img src={img4}  alt="slide" />
                </div>
                <div className="slide">
                    <img src={img5}  alt="slide" />
                </div>
            </Slider>
        );
    }
}

export default SliderHome;