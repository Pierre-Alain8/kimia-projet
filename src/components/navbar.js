import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Accueil from '../components/Accueil';
import Cantine from '../components/Cantine';
import Epicerie from '../components/Epicerie'; 
import Enfants from '../components/Enfants'; 
import Association from '../components/Association';
import Evenements from '../components/Evenements';
import Equipe from '../components/Equipe';
import Contact from '../components/Contact';





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
                <Route exact path="/Accueil" component={Accueil}/>

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