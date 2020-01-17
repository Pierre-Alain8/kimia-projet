import React from 'react';
import { withRouter} from 'react-router-dom';
import Header from './Header';
import Pdpcol from './Pdp_col';
import Instagram from './Instagram';
import Actualite from './Actualite';
import Footer from './Footer';
import '../index';
<<<<<<< HEAD
// import '../../src/accueil.css'
// contact Diane
// footer Ricardo
=======
>>>>>>> 1d3225d601fe349fb1523ce100dfa1447c594b70


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