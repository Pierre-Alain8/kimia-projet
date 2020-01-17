import React from 'react';
import { withRouter } from "react-router-dom";
import kimiaCantine from '../img/kimia-cantine.jpg';

class Cantine extends React.Component {



    render() {
        return (

        <section className="component">
            
            <section className="section-cantine">

                <article className="cantine-content">

                        <div className="cantine-description">

                            <div className="cantine-title"> 
                                <h1>LA CANTINE  </h1>
                            </div>

                            <div className="cantine-text">
                                <h2>Une cuisine saine et responsable</h2>

                                <p> 
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur soluta qui repellendus aspernatur. Ex ea, quod amet doloribus animi assumenda nihil ut delectus earum ratione, nemo enim nkjblez:fnlzfen zijefihef e
                                </p>
                            </div>
                        </div>

                        <div className="col-cantine-mots-cles">

                            <div className="col-cantine-1">
                                <p>Produits locaux</p>
                                <p>Produits revalorisés</p>
                                <p>Cuisine faite maison</p>
                            </div>

                            <div className="col-tab"></div>

                            <div className="col-cantine-2">
                                <p> 
                                    Lorem ipsum dolor, 
                                    sit amet consectetur adipisicing elit. 
                                    Tenetur soluta qui repellendus aspernatur. 
                                    Ex ea, quod amet doloribus animi assumenda 
                                    nihil ut delectus earum ratione, 
                                    nemo enim nkjblez:fnlzfen zijefihef e
                                </p>
                            </div>
                        </div>

                        <div className="onglet-epicerie" >
                            <p>Découvrir l'épicerie</p>
                        </div>

                </article>

                <article className="cantine-cover">

                    <img src={kimiaCantine} alt="kimia-cantine" />

                </article>

                

            </section>
        </section>
        
            
        )
    }
}

export default withRouter(Cantine);