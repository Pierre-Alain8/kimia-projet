import React from 'react';


class Navabar extends React.Component {
    render () {
        return(
        <div className="Navbar">
            <header id="header" role="banner" className="main-header">
                <nav className="header-nav">
                    <ul>
                        <li><a href="#">Cantine</a></li>
                        <li><a href="#">Epicerie</a></li>
                        <li><a href="#">Enfants</a></li>
                        <li><a href="#">Association</a></li>
                        <li><a href="#">Evénements</a></li>
                        <li><a href="#">Equipe</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
        )
    }
}

export default Navabar