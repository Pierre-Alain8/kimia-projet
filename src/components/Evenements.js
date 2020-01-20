import React from 'react';
import SliderEvents from './SliderEvents';
import './evenement.css'

class Evenments extends React.Component{
    
    render() {
        return(
            <section className="component-event">
                <h1>Evenments</h1>
                <SliderEvents /> 

                
            </section>
        )
    }
}

export default Evenments