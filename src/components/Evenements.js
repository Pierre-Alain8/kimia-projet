import React from 'react';
// import SliderEvents from './SliderEvents';
import './evenement.css'
// import 'slick-carousel/slick/slick.css'; 
// import "slick-carousel/slick/slick-theme.css";
import Events from './Events';

class Evenments extends React.Component{
    
    render() {
        return(
            <section className="component-event">
                {/* <SliderEvents />  */}
                <Events />

                
            </section>
        )
    }
}

export default Evenments