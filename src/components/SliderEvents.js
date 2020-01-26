import React from 'react';
import events from '../events'
import Events from './Events'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

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
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            pauseOnHover: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
    
          };
          
          return (
            <section className="component-center component-slider">
            <h1>EVENEMENTS</h1>
                {/*<article className="container-events">*/}
                 
                            <Slider {...settings} >
                            
                            {  events.map (event => 
                            
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

