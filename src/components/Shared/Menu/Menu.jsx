import React, { Component } from 'react';

class Menu extends Component {

    render() {
        return (
            <div className="Menu">
                <li className="mdl-menu__item">Inscripción</li>
                <li className="mdl-menu__item">Reservar Clase</li>
                <li className="mdl-menu__item">Pagar Cuota</li>
                <li className="mdl-menu__item">Consulta</li>
            </div>
        );
    }
}

export default Menu;