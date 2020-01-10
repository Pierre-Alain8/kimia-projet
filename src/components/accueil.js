import React from 'react';
import { withRouter} from 'react-router-dom';
import '../css/accueil.css';
// navbar Ricado
import Navbar from './navbar';
import '../index'
// header Diane
// instagram PA
import Instagram from './Instagram';
// Actualité PA
import Actualité from './Actualité';
// contact Diane
// footer Ricardo


class Accueil extends React.Component {



    render() {
        return (

            <section id="Accueil">
                {<Navbar className='Navbar'/>}
                {/* <Actualité />
                <Instagram /> */} 
                
            </section>
            
        )
    }

}



export default withRouter(Accueil);