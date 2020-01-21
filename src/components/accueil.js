import React from 'react';
import { withRouter} from 'react-router-dom';
import Header from './Header';
import Pdpcol from './Pdp_col';
import Instagram from './Instagram';
import Actualite from './Actualite';
import '../index';


class Accueil extends React.Component {



    render() {
        return (

            <section id="Accueil">
                <Header />
                <Actualite />

            <section className="pdp">
                <Instagram />
                <Pdpcol />
                {/*<Footer />*/}
            </section>

             </section>
            

        )
    }

}



export default withRouter(Accueil);