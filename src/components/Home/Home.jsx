import React, { Component } from 'react';

import SliderHome from '../Home/Slider/Slider.jsx';

import img1 from '../../assets/images/home-1.jpg';
import img2 from '../../assets/images/home-2.jpg';
import img3 from '../../assets/images/home-3.jpg';

class Home extends Component {

    render() {
        return (
            <div className="Home">
                <div className="android-content">
                    <SliderHome />
                    <div className="android-more-section">
                        <div className="android-section-title mdl-typography--display-1-color-contrast">Información</div>
                        <div className="android-card-container mdl-grid">
                            <div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--4dp">
                                <div className="mdl-card__media">
                                    <img src={img1} />
                                </div>
                                <div className="mdl-card__title">
                                    <h4 className="mdl-card__title-text">ACTIVIDAD FÍSICA</h4>
                                </div>
                                <div className="mdl-card__supporting-text">
                                    <span className="mdl-typography--font-light mdl-typography--subhead">Natale es el primer gimnasio para embarazadas de Córdoba. Toda la actividad física que se dicta es especializada y apunta a que futuras mamás lleguen al día del parto en óptimas condiciones y las que ya fueron madres, recuperen su condición física.</span>
                                </div>
                                <div className="mdl-card__actions">
                                    <a className="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" href="">
                                        MÁS INFO
                                    <i className="material-icons">chevron_right</i>
                                    </a>
                                </div>
                            </div>

                            <div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--4dp">
                                <div className="mdl-card__media">
                                    <img src={img2}/>
                                </div>
                                <div className="mdl-card__title">
                                    <h4 className="mdl-card__title-text">CURSOS</h4>
                                </div>
                                <div className="mdl-card__supporting-text">
                                    <span className="mdl-typography--font-light mdl-typography--subhead">En nuestros Cursos de Preparación al Parto la futura mamá adquiere conocimientos teóricos y prácticos sobre lo que pueda suceder el día del parto y sobre qué hacer ante cada situación. La información brinda seguridad y tranquilidad.</span>
                                </div>
                                <div className="mdl-card__actions">
                                    <a className="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" href="">
                                        MÁS INFO
                                    <i className="material-icons">chevron_right</i>
                                    </a>
                                </div>
                            </div>

                            <div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--4dp">
                                <div className="mdl-card__media">
                                    <img src={img3} />
                                </div>
                                <div className="mdl-card__title">
                                    <h4 className="mdl-card__title-text">TALLERES</h4>
                                </div>
                                <div className="mdl-card__supporting-text">
                                    <span className="mdl-typography--font-light mdl-typography--subhead">Nuestros talleres están orientados a brindar herramientas imprescindibles para madres recientes. Todos son dictados en Natale por profesionales especializados y duran aproximadamente 2 horas.</span>
                                </div>
                                <div className="mdl-card__actions">
                                    <a className="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" href="">
                                        MÁS INFO
                                    <i className="material-icons">chevron_right</i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;