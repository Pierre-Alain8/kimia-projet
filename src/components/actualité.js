import React from 'react';

import Actualité1 from '../img/kimia-actualite-1.jpg';
import Actualité2 from '../img/kimia-actualite-2.jpg';
import Actualité3 from '../img/kimia-actualite-3.jpg';

class Actualité extends React.Component {
    render() {
        return (
            <section id="news">

                <div className="newsContenair">
                        
                        <h1 className="title">ACTUALITÉ</h1>

                    <div className="articlesContenair">
                        <article className="newsArticles">

                            <img src={Actualité1} alt="actualité" />

                            <h2 className="newsTitle"> Lancement du Kimia café</h2>

                            <p className="newsContent"> 
                                Après 2 mois de travaux, le Kimia ouvrira officiellement ses portes après une grande soirée de lancement en mars 2020. 
                                Nous avons hâte de vous y rencontrer à cette occasion!
                            </p>

                        </article>

                        <article className="newsArticles">

                            <img src={Actualité2} alt="actualité"/>

                            <h2 className="newsTitle"> Remise des contreparties ulule </h2>

                            <p className="newsContent"> 
                                Venez retirer vos contreparties ou bénéficier gratuitement de vos prestation sélectionnées 
                                lors du financement participatif à tous moment au Kimia café!
                            </p>

                        </article>
                            
                        <article className="newsArticles">

                            <img src={Actualité3} alt="actualité" />

                            <h2 className="newsTitle"> Fabrication de produits ménagers </h2>

                            <p className="newsContent"> 
                                Et  si pour consommer plus sainement en faisant des économies et en gagnant du temps, 
                                vous faisiez vous même vos produits ménagers? Nous vous proposons des astuces simples, rapides et efficaces à tous les coups!
                            </p>

                        </article>

                    </div>
                    
                </div>

            </section>
                
            
        )
    }
}

export default (Actualité)












