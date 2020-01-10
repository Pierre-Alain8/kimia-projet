import React from 'react';
import { withRouter} from 'react-router-dom';
import Header from './header';
import '../css/accueil.css';
import Pdpcol from './pdp_col';
// navbar Ricado
// instagram PA
// contact Diane
// footer PA

class Accueil extends React.Component {



    render() {
        return (
            <div>
            <Header />
            <Pdpcol />
            </div>
        )
    }

}



export default withRouter(Accueil);