import React from 'react';
import events from '../events'
import Events from './Events'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



class SliderEvents extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
             events: []
        }
    }
    
    componentDidMount() {
        this.setState({
            events
        }) 
        
    }
    


    render() {
    
        const settings = {
            dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
          };
          
          return (
            <section className="slider-component">
            
              <h2> Evénements </h2>
              
                {/*<article className="container-events">*/}
                
                   
                        
                         
                            <Slider {...settings} >
                            
                            {  this.state.events.map (event => 
                            
                              <Events 
                              key={event.id}
                              eventsId ={event.id}
                              eventsTitle={event.title}
                              eventsImg={event.img}
                              eventsContent={event.content}
                              
                              />
                            
                            )}
                            </Slider>
   
                {/*</article>*/}
            </section>
          );
        }
       
    }


export default (SliderEvents)

