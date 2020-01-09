import React from 'react';
import { withRouter} from 'react-router-dom';
import Header from './header'
import '../css/accueil.css';

// navbar Ricado
// instagram PA
// contact Diane
// footer PA

class Accueil extends React.Component {



    render() {
        return (
            <Header />
        )
    }

}



export default withRouter(Accueil);