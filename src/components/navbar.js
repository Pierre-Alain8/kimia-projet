import React from 'react';
import { Link } from 'react-router-dom';


class Navabar extends React.Component {
    render () {
        return(
            <section className="Navbar">
                <header id="nav" role="banner" className="main-header">
                    <nav className="header-nav">
                    <div className="navbar-brand"><h3>Kimia</h3></div>
                        <ul>
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/Cantine">Cantine</Link></li>
                            <li><Link to="/Epicerie">Epicerie</Link></li>
                            <li><Link to="/Enfants">Enfants</Link></li>
                            <li><Link to="/Association">Association</Link></li>
                            <li><Link to="/Evénements">Evénements</Link></li>
                            <li><Link to="/Equipe">Equipe</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </nav>
                </header>
            </section>
     

        )
    }
}

export default Navabar