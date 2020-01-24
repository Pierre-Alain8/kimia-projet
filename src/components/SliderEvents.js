// import React from 'react';
// import events from '../events'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";




// class SliderEvents extends React.Component{

//     constructor(props) {
//         super(props)
    
//         this.state = {
//              events: []
//         }
//     }
    
//     componentDidMount() {
//         this.setState({
//             events
//         }) 
        
//     }
    


//     render() {
    
//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 6,
//             slidesToScroll: 12
//           };
          
//           return (
//             <section className="slider-component">
            
//               <h2> Evénements </h2>
              
//                 {/*<article className="container-events">*/}
                
//                     {
//                         this.state.events
//                          .map((events) => (
                         
//                             <Slider {...settings} key={events.id}>
                            
//                               <div  key={events.id}>
                               
//                                 <h2>{events.title}</h2>
//                                 <img src={events.img} alt={events.title}/>
//                                 <p>{events.content}</p>
                    
//                               </div>
//                             </Slider>
//                          ))
                        
//                     }
                
                   
//                 {/*</article>*/}
//             </section>
//           );
//         }
       
//     }


// export default (SliderEvents)
