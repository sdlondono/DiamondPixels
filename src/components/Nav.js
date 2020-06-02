import React from 'react';
import logo from '../assets/img/logo.svg'
import { Link } from 'react-router-dom'
function Nav(props) {
    console.log(props)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/"><img src={require('../assets/img/logo.png')} height="100" width="300" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link mx-5" style={{ color: props.flag !== 1 ? "#35b4bc" : "#363839" }} to="/">Quiénes Somos</Link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Servicios
                         </a>
                        <div class="dropdown-menu  mx-5" aria-labelledby="navbarDropdownMenuLink">
                            <Link class="dropdown-item" to="/service">Diseño de Marca</Link>
                            <a class="dropdown-item" href="/mechandising">Merchandising</a>
                            <a class="dropdown-item" href="#">Manual de Identidad</a>
                            <a class="dropdown-item" href="#">Diseño Web</a>
                            <a class="dropdown-item" href="#">Fotografía y Animación 2D</a>
                            <a class="dropdown-item" href="#">E-learning Corporativo</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-5" style={{ color: "#35b4bc" }} href="#">Portafolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-5" style={{ color: "#35b4bc" }} href="#">Contáctenos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.instagram.com/diamondpixels_/"><img src={require('../assets/img/icono_instagram.png')} height={30} width={30} /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.facebook.com/Diamond-Pixels-110593470675847/"><img src={require('../assets/img/icono_fb.png')} height={30} width={30} /></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;