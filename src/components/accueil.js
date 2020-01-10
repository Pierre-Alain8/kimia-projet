import React from 'react';
import { withRouter} from 'react-router-dom';
import Header from './Header';
import '../css/accueil.css';
import Pdpcol from './Pdp_col';
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