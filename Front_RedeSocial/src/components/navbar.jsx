// import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faList } from '@fortawesome/free-solid-svg-icons';
import { logo_icon } from '../assets/img.jsx';
import '../styles/Navbar.css';

function MyNavbar() {
    return (
        <nav id="navbar">
            <div id="navbar-inner">
                <h2 id='text-logo'><img id='logo-icon' src={logo_icon} alt="Fluxo"/>Fluxo</h2>
                <ul id="nav-links">
                    <li><a href="#"><FontAwesomeIcon icon={faHouse}/> Home</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faList}/> Categorias</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faUser}/> Seu Perfil</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default MyNavbar;