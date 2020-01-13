import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Cantine from './Cantine';
import Epicerie from './Epicerie'; 
import Enfants from './Enfants'; 
import Association from './Association';
import Evenements from './Evenements';
import Equipe from './Equipe';
import Contact from './Contact';





class Navabar extends React.Component {
    render () {
        return(
        <Router>
            <section className="Navbar">
                <header id="nav" role="banner" className="main-header">
                    <nav className="header-nav">
                    <div className="navbar-brand"><h3>Kimia</h3></div>
                        <ul>
                            <li><Link to="/Accueil">Accueil</Link></li>
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

            <Switch>
                <Route exact path="/"/>

                <Route path="/Cantine" component={Cantine} />
            
                <Route path="/Epicerie" component={Epicerie}/>
                
                <Route path="/Enfants" component={Enfants} />

                <Route path="/Association" component={Association}/>

                <Route path="/Evénements" component={Evenements}/>

                <Route path="/Equipe" component={Equipe} />
                
                <Route path="/Contact" component={Contact}/> 
            </Switch>

        </Router>
        )
    }
}

export default Navabar