import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    /*constructor() {
        super();
        this.state = {
            username: "",
            logged: false
        }
    }

    componentDidMount() {
        var data = sessionStorage.getItem('name');

        this.setState({
            username: data,
            logged: true
        });
    }*/

    render() {
        /*var loginButton;
        if (this.state.logged) {
            loginButton = <FacebookLogin />;
        } else {
            loginButton = <div className="user-data">{this.state.username}</div>;
        }*/
        return (
            <div className="Navbar">
                <div className="android-navigation-container">
                    <nav className="android-navigation mdl-navigation">
                        <Link className="mdl-navigation__link mdl-typography--text-uppercase" to="/inicio">INICIO</Link>
                        <Link className="mdl-navigation__link mdl-typography--text-uppercase" to="/horario">HORARIO</Link>
                        <Link className="mdl-navigation__link mdl-typography--text-uppercase" to="/actividades">ACTIVIDADES</Link>
                        <Link className="mdl-navigation__link mdl-typography--text-uppercase" to="/talleres">TALLERES</Link>
                        <Link className="mdl-navigation__link mdl-typography--text-uppercase" to="/profesionales">PROFESIONALES</Link>
                        <Link className="mdl-navigation__link mdl-typography--text-uppercase" to="/cursos">CURSOS</Link>
                        <Link className="mdl-navigation__link mdl-typography--text-uppercase" to="/preguntas">PREGUNTAS</Link>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;
