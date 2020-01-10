import React from 'react';
import { withRouter} from 'react-router-dom';
import Header from './Header';
import '../css/accueil.css';
import Pdpcol from './Pdp_col';
import '../css/accueil.css';
import Navbar from './navbar';
import '../index'
import Instagram from './Instagram';
import Actualité from './Actualité';
// contact Diane
// footer Ricardo


class Accueil extends React.Component {



    render() {
        return (

             <section id="Accueil">
                {<Navbar className='Navbar'/>}
                <Header />
                <Pdpcol />
                {/* <Actualité />
                <Instagram /> */} 
                
            </section>
            

        )
    }

}



export default withRouter(Accueil);