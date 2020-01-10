import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Accueil from './components/accueil';
import Cantine from './components/Cantine';
import Epicerie from './components/Epicerie';
import Enfants from './components/Enfants';
import Association from './components/Association';
import Evénements from './components/Evenements';
import Equipe from './components/Equipe';
import Navabar from './components/navbar';



class App extends React.Component {
  render() {
      return (
          
          <Router>
              <Switch>
                   <Route exact path="/" component={Accueil} />
              </Switch>
          </Router>
      );
  }
}

export default App;
