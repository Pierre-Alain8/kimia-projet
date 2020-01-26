import React from 'react';
import { Link } from 'react-router-dom';
import SliderEvents from './SliderEvents';
import './evenement.css'
import 'slick-carousel/slick/slick.css'; 
import "slick-carousel/slick/slick-theme.css";


class Evenments extends React.Component{
    
    
    render() {
        return(

            <section className="component center center-evenement">
                        
                <div className="col-text-section">
                     <h1>EVENEMENT</h1>
                </div>
        
                <SliderEvents /> 
                        
                <div className="col-text-onglet"  >
                    <p><Link to="/Association">Découvrir l'association</Link></p>
                </div>
                
            </section>
        )
    }
    
    
}

export default Evenments