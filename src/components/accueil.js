import React from 'react';
import { withRouter} from 'react-router-dom';
import Header from './Header';
import Actualite from './Actualite';
import '../index';


class Accueil extends React.Component {



    render() {
        return (

            <section id="Accueil">
                <Header />
                <Actualite />

            
                <Instagram />
                <Pdpcol />
         

             </section>
            

        )
    }

}



export default withRouter(Accueil);