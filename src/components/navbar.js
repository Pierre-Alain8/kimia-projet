import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


class Navabar extends React.Component {
    render () {
        return(
            <Router>
        <div className="Navbar">
            <header id="header" role="banner" className="main-header">
                <nav className="header-nav">
                <div className="navbar-brand">Kimia</div>
                    <ul>
                        <li><Link to="/Cantine">Cantine</Link></li>
                        <li><Link to="/Epicerie">Epicerie</Link></li>
                        <li><Link to="/Enfants">Enfants</Link></li>
                        <li><Link to="/Association">Association</Link></li>
                        <li><Link to="/Evenement">Evénements</Link></li>
                        <li><Link to="/Equipe">Equipe</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
        </Router>
        )
    }
}

export default Navabar