import React from 'react';
import { Link } from 'react-router-dom';


class Navabar extends React.Component {
    render () {
        return(
        <div className="Navbar">
            <header id="header" role="banner" className="main-header">
                <nav className="header-nav">
                <div className="navbar-brand">Kimia</div>
                    <ul>
                        <li><Link to="/">Cantine</Link></li>
                        <li><Link to="/">Epicerie</Link></li>
                        <li><Link to="/">Enfants</Link></li>
                        <li><Link to="/">Association</Link></li>
                        <li><Link to="/">Evénements</Link></li>
                        <li><Link to="/">Equipe</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
        )
    }
}

export default Navabar