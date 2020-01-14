import React from 'react';
import '../../src/association.css';
import assopic from '../../src/img/journée-internationale-personnes-âgées.jpg';

class Association extends React.Component{
    render() {
        return(
            
            <div className="component-asso" >
                <div className="asso-content" > 
                    <section className="asso-img" >
                        <img alt="solidarité" src={assopic} />              
                    </section>

                    <section className="asso-text" >
                        
                        <div></div>
                            <div className="asso-titre" >
                                <h1>L'ASSOCIATION</h1>
                            </div>
                            <div className="asso-pavtext" >
                                <h2>Remettre l'humain et la nature au centre de nos intérêts</h2>
                                <p> en magasin sont tous formés aux spécificités des produits biologiques afin de  en magasin sont tous formés aux spécificités des produits biologiques afin de  en magasin sont tous formés aux spécificités des produits biologiques afin de  en magasin sont tous formés aux spécificités des produits biologiques afin de  en magasin sont tous formés aux spécificités des produits biologiques afin de </p>
                            </div>
                            <div className="asso-col" >
                                <article className="asso-col-un" >
                                    <p>Produits locaux</p>
                                    <p>Produits revalorisés</p>
                                    <p>Cuisine faite maison</p>
                                </article>
                                <article className="asso-col-deux" >
                                    <p>Envie de bien manger dans un cadre design ? Au sein du très branché concept-store Merci, La Cantine sert tous les jours un déjeuner sain et équilibré. La carte qui varie au fil des saisons propose des salades et des produits frais  .</p>
                                </article>
                            </div>
                            <div className="onglet-contact" >
                                <p>Découvrir l'équipe</p>
                            </div>


                    </section>
                </div>
            </div>
            
        )
    }
}

export default (Association)