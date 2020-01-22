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
            <section className="component center">
                <div className="component-conteneur cols-space center">
                
                {/* Colonne 1 */}
                    <article className="col-img-ep">
                        <img src={epicerie} alt="epicerie" className="deux-cols-space-img"/>
                    </article>

                    {/* Colonnes 2 */}
                    <article className="col-text-ep" id="dims-col-ep" >
                        
                        <div className="col-text-section" id="dims-bloc-titre">
                            <h1>EPICERIE</h1>
                        </div>

                        <div className="col-text-pavtext col-text dims-bloc-texte">
                            <h2>des bons produits locaux pour le quotidient</h2>
                                <p>lorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat. Pellentesque euismod ipsum non mi volutpat euismod.lorem ipsum Ut aliquet porta egestas. Pellentesque euismod ipsum non mi volutpat euismod.lorem ipsum Ut aliquet porta egestas.</p>
                        </div>
                    

                        <div className="wrapper col-text dims-wrapper">

                            <div className="cart-content">

                                <figure className="item">
                                    <img src={epicerie4} alt="epicerie" className="pic-img-dims"/>      
                                        <figcaption className="glocery vignette-row-un">Confiserie</figcaption>
                                </figure>

                                <figure className="item">
                                    <img src={epicerie5} alt="epicerie" className="pic-img-dims"/>      
                                        <figcaption className="glocery vignette-row-un">Confiserie</figcaption>
                                </figure>

                                <figure className="item">
                                    <img src={epicerie3} alt="epicerie" className="pic-img-dims"/>      
                                        <figcaption className="glocery vignette-row-un">Confiserie</figcaption>
                                </figure>

                                <figure className="item">
                                    <img src={epicerie1} alt="epicerie" className="pic-img-dims"/>      
                                        <figcaption className="glocery vignette-row-un">Confiserie</figcaption>
                                </figure>

                                <figure className="item">
                                    <img src={epicerie2} alt="epicerie" className="pic-img-dims"/>      
                                        <figcaption className="glocery vignette-row-un">Confiserie</figcaption>
                                </figure>

                                <figure className="item">
                                    <img src={epicerie6} alt="epicerie" className="pic-img-dims"/>      
                                        <figcaption className="glocery vignette-row-un">Confiserie</figcaption>
                                </figure>
                            </div>
                    
                    
                            <div className="cart-content">

                                <figure className="item">
                                    <img src={epicerie6} alt="epicerie" className="pic-img-dims"/>      
                                        <figcaption className="glocery vignette-row-deux">Confiserie</figcaption>
                                </figure>

                                <figure className="item">
                                    <img src={epicerie5} alt="epicerie" className="pic-img-dims"/>      
                                        <figcaption className="glocery vignette-row-deux">Confiserie</figcaption>
                                </figure>

                                <figure className="item">
                                    <img src={epicerie3} alt="epicerie" className="pic-img-dims"/>      
                                        <figcaption className="glocery vignette-row-deux">Confiserie</figcaption>
                                </figure>

                                <figure className="item">
                                    <img src={epicerie1} alt="epicerie" className="pic-img-dims"/>      
                                        <figcaption className="glocery vignette-row-deux">Confiserie</figcaption>
                                </figure>

                                <figure className="item">
                                    <img src={epicerie2} alt="epicerie" className="pic-img-dims"/>      
                                        <figcaption className="glocery vignette-row-deux">Confiserie</figcaption>
                                </figure>

                                <figure className="item">
                                    <img src={epicerie6} alt="epicerie" className="pic-img-dims"/>      
                                        <figcaption className="glocery vignette-row-deux">Confiserie</figcaption>
                                </figure>
                            </div>

                        </div>

                        <div className="col-text-onglet" id="col-text-onglet" >
                            <p>Découvrir l'épicerie</p>
                        </div>
                    </article>

                </div>
            </section>
        )
    }
}

export default Epicerie
