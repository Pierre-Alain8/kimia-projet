import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Navabar extends React.Component {
    render () {
        return(
        <Router>
            <div className="Navbar">
                <header id="header" role="banner" className="main-header">
                    <nav className="header-nav">
                    <div className="navbar-brand">Kimia</div>
                        <ul>
                            <li><Link to="/Accueil">Accueil</Link></li>
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
            <Route exact path="/" render = { () =>{
                return <h1>Page d'Accueil</h1>
            }} />
            <Route path="/Cantine" render = { () =>{
                return <h1>Cantine</h1>
            }} />
            <Route path="/Epicerie" render = { () =>{
                return <h1>Epicerie</h1>
            }} />
            <Route path="/Enfants" render = { () =>{
                return <h1>Enfants</h1>
            }} />
            <Route path="/Association" render = { () =>{
                return <h1>Association</h1>
            }} />
            <Route path="/Evenement" render = { () =>{
                return <h1>Evenement</h1>
            }} />
            <Route path="/Equipe" render = { () =>{
                return <h1>Equipe</h1>
            }} />
            <Route path="/Contact" render = { () =>{
                return <h1>Contact</h1>
            }} />
        </Router>
        )
    }
}

export default Navabar