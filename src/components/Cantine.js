import React from 'react';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import kimiaCantine from '../img/kimia-cantine.jpg';

class Cantine extends React.Component {



    render() {
        return (

          
            <div className="component center" >
                <div className="component-conteneur cols-space center component-cantine"> 

                    <section className="deux-cols-space col-text height90">
                        
                        <div className="col-text-section" >
                            <h1 className="no-margin">La Cantine</h1>
                        </div>

                        <div className="col-text-pavtext col-text" id="col-text-pavtext-cantine" >
                            <h2>Une cuisine saine et responsable</h2>
                                <p> en magasin sont tous formés aux spécificités des produits biologiques afin de  en magasin sont tous formés aux spécificités des produits biologiques afin de  en magasin sont tous formés aux spécificités des produits biologiques afin de  en magasin sont tous formés aux spécificités des produits biologiques afin de  en magasin sont tous formés aux spécificités des produits biologiques afin de </p>
                        </div>

                        <div className="cols col-text-tableau" id="col-text-tableau" >

                            <article className="deux-cols center col-text" >
                                <p>Produits locaux</p>
                                <p>Produits revalorisés</p>
                                <p>Cuisine faite maison</p>
                            </article>
                
                            <article className="deux-cols center" >
                                <p>Envie de bien manger dans un cadre design ? Au sein du très branché concept-store Merci, La Cantine sert tous les jours un déjeuner sain et équilibré. La carte qui varie au fil des saisons propose des salades et des produits frais  .</p>
                            </article>

                        </div>

                        <div className="col-text-onglet" id="col-text-onglet" >
                            <p><Link to="/Epicerie">Découvrir l'épicerie</Link></p>
                        </div>


                    </section>

                    <section className="deux-cols-space">
                        <img alt="solidarité" className="deux-cols-space-img" src={kimiaCantine} />              
                    </section>

                </div>
            </div>
        
            
        )
    }
}

export default withRouter(Cantine);