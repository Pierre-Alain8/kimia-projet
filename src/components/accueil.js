import React from 'react';
import { withRouter} from 'react-router-dom';
import '../css/accueil.css';
// navbar Ricado
// header Diane
// instagram PA
import Instagram from './instagram';
// Actualité PA
import Actualité from './actualité';
// contact Diane
// footer Ricardo

class Accueil extends React.Component {



    render() {
        return (

            <section id="Accueil">
                {/* <Actualité /> */}
                <Instagram />
            </section>
            
        )
    }

}



export default withRouter(Accueil);