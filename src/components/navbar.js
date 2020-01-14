import React from 'react';
import { NavLink } from 'react-router-dom';


class Navabar extends React.Component {
    render () {
        return(
            <section className="Navbar">
                <header id="nav" role="banner" className="main-header">
                    <nav className="header-nav">
                    <div className="navbar-brand"><h3>Kimia</h3></div>
                        <ul>
                            <li><NavLink to="/">Accueil</NavLink></li>
                            <li><NavLink to="/Cantine">Cantine</NavLink></li>
                            <li><NavLink to="/Epicerie">Epicerie</NavLink></li>
                            <li><NavLink to="/Enfants">Enfants</NavLink></li>
                            <li><NavLink to="/Association">Association</NavLink></li>
                            <li><NavLink to="/Evénements">Evénements</NavLink></li>
                            <li><NavLink to="/Equipe">Equipe</NavLink></li>
                            <li><NavLink to="/Contact">Contact</NavLink></li>
                        </ul>
                    </nav>
                </header>
            </section>
     

        )
    }
}

export default Navabar