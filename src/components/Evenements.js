import React from 'react';
import SliderEvents from './SliderEvents';
import './evenement.css'
import 'slick-carousel/slick/slick.css'; 
import "slick-carousel/slick/slick-theme.css";


class Evenments extends React.Component{
    
    render() {
        return(
            <section className="component center">
        
                <SliderEvents /> 
            </section>
        )
    }
}

export default Evenments