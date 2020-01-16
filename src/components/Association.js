import React from 'react';
import '../../src/association.css';
import assopic from '../../src/img/journée-internationale-personnes-âgées.jpg';

class Association extends React.Component{
    render() {
        return(
            
            <div className="component center" >
                <div className="component-conteneur cols-space"> 
                    <section className="deux-cols-space">
                        <img alt="solidarité" className="deux-cols-space-img" src={assopic} />              
                    </section>

                    <section className="deux-cols-space col-text">
                        
                            <div className="col-text-section" >
                                <h1>L'ASSOCIATION</h1>
                            </div>
                            <div className="col-text-pavtext" >
                                <h2>Remettre l'humain et la nature au centre de nos intérêts</h2>
                                <p> en magasin sont tous formés aux spécificités des produits biologiques afin de  en magasin sont tous formés aux spécificités des produits biologiques afin de  en magasin sont tous formés aux spécificités des produits biologiques afin de  en magasin sont tous formés aux spécificités des produits biologiques afin de  en magasin sont tous formés aux spécificités des produits biologiques afin de </p>
                            </div>
                            <div className="cols col-text-tableau" >
                                <article className="deux-cols center col-text" >
                                    <p>Produits locaux</p>
                                    <p>Produits revalorisés</p>
                                    <p>Cuisine faite maison</p>
                                </article>
                                <article className="deux-cols center" >
                                    <p>Envie de bien manger dans un cadre design ? Au sein du très branché concept-store Merci, La Cantine sert tous les jours un déjeuner sain et équilibré. La carte qui varie au fil des saisons propose des salades et des produits frais  .</p>
                                </article>
                            </div>
                            <div className="col-text-onglet" >
                                <p>Découvrir l'équipe</p>
                            </div>


                    </section>
                </div>
            </div>
            
        )
    }
}

export default (Association)