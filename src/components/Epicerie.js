import React from 'react';
import epicerie from '../img/Silos_epicerie.jpg'
import  epicerie1 from '../img/epicerie-2.jpg'
import  epicerie2 from '../img/epicerie-2.jpg';
import  epicerie3 from '../img/epicerie-2.jpg';
import  epicerie4 from '../img/epicerie-2.jpg';
import  epicerie5 from '../img/epicerie-2.jpg';
import  epicerie6 from '../img/epicerie-2.jpg';


class Epicerie extends React.Component{

    render() {
        return(
            <section className="component">
                
                <div className="img-content">
                    <img src={epicerie} alt="epicerie" />
                </div>
                
                <article className="cart-bloc" >
                        
                    <div className="title-bloc" >
                        
                        <h1>EPICERIE</h1>
                        <h2>des bons produits locaux pour le quotidient</h2>
                        <p>lorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat. Pellentesque euismod ipsum non mi volutpat euismod.lorem ipsum Ut aliquet porta egestas. Pellentesque euismod ipsum non mi volutpat euismod.lorem ipsum Ut aliquet porta egestas.</p>
                    </div>
                

                    <div className="wrapper">

                    <div className="cart-content">
                        <figure className="text-content item">
                            <img src={epicerie4} alt="epicerie" />      
                                <figcaption className="glocery">Confiserie</figcaption>
                                <div className="empty"></div>
                        </figure>
                        <figure className="text-content item">
                            <img src={epicerie5} alt="epicerie" />      
                                <figcaption className="glocery">Confiserie</figcaption>
                                <div className="empty"></div>
                        </figure>
                        <figure className="text-content item">
                            <img src={epicerie3} alt="epicerie" />      
                                <figcaption className="glocery">Confiserie</figcaption>
                                <div className="empty"></div>
                        </figure>
                        <figure className="text-content item">
                            <img src={epicerie1} alt="epicerie" />      
                                <figcaption className="glocery">Confiserie</figcaption>
                                <div className="empty"></div>
                        </figure>
                        <figure className="text-content item">
                            <img src={epicerie2} alt="epicerie" />      
                                <figcaption className="glocery">Confiserie</figcaption>
                                <div className="empty"></div>
                        </figure>
                        <figure className="text-content item">
                        <img src={epicerie6} alt="epicerie" />      
                            <figcaption className="glocery">Confiserie</figcaption>
                            <div className="empty"></div>
                    </figure>
                    </div>
                
                
                    <div className="cart-content">
                        <figure className="text-content item">
                            <img src={epicerie6} alt="epicerie" />      
                            <figcaption className="glocery">Confiserie</figcaption>
                            <div className="empty"></div>
                        </figure>
                    <figure className="text-content item">
                        <img src={epicerie5} alt="epicerie" />      
                            <figcaption className="glocery">Confiserie</figcaption>
                            <div className="empty"></div>
                    </figure>
                        <figure className="text-content item">
                            <img src={epicerie3} alt="epicerie" />      
                        <figcaption className="glocery">Confiserie</figcaption>
                        <div className="empty"></div>
                    </figure>
                    <figure className="text-content item">
                        <img src={epicerie1} alt="epicerie" />      
                            <figcaption className="glocery">Confiserie</figcaption>
                            <div className="empty"></div>
                    </figure>
                    <figure className="text-content item">
                        <img src={epicerie2} alt="epicerie" />      
                            <figcaption className="glocery">Confiserie</figcaption>
                        <div className="empty"></div>
                    </figure>
                    <figure className="text-content item">
                        <img src={epicerie6} alt="epicerie" />      
                            <figcaption className="glocery">Confiserie</figcaption>
                        <div className="empty"></div>
                    </figure>
                    </div>

                    </div>
                    
                </article>

            </section>
        )
    }
}

export default Epicerie
