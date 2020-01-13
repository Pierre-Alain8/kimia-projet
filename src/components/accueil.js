import React from 'react';
import { withRouter} from 'react-router-dom';
import Navabar from './Navbar';
import Header from './Header';
import Pdpcol from './Pdp_col';
import Instagram from './Instagram';
import Actualité from './Actualité';
import '../index';
import '../../src/accueil.css'
// contact Diane
// footer Ricardo


class Accueil extends React.Component {



    render() {
        return (

             <section id="Accueil">
                <Navabar />
                <Header />
                <Actualité />

                <section className="pdp">
                    <Instagram />
                    <Pdpcol />
                </section>

            </section>
            

        )
    }

}



export default withRouter(Accueil);