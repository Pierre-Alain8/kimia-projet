import React from 'react';
import Enfant from '../img/enfant.jpg'


class Enfants extends React.Component{
    render() {
        return(
            <section className="component-full-height center">
                    
                <article className="component-conteneur cols-space center component-enfants ">  

                <div className="deux-cols-space col-text height90">

                    <div className="col-text-section" >
                        <h1>Les Enfants</h1>
                    </div>

                    <div className="col-text-pavtext col-text">
                        <h2>ils meritent le meilleurs. Nous leur offrons le meilleur</h2>
                            <p className="justify">lorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat. Pellentesque euismod ipsum non mi volutpat euismod.Pellentesque euismod ipsum non mi volutpat euismod. Curabitur mollis, velit eu venenatis semper, mi dolor scelerisque nisi, id interdum risus nulla quis ligula. Phasellus tortor sem, tincidunt id tortor fermentum, tincidunt sagittis turpis. </p>
                    </div>

                    <div className="cols col-text-tableau">
                        <div className="trois-cols">
                            <h2>aire de jeux</h2>
                                <p className="padding">lorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat. Pellentesque euismod ipsum non mi volutpat euismod.lorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat.</p>
                        </div>
                        <div className="trois-cols">
                            <h2>atelier et stage</h2>
                                <p className="add-border-lr padding">lorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat. Pellentesque euismod ipsum non mi volutpat euismod lorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat.</p>
                        </div>
                        <div className="trois-cols">
                            <h2>anniversaire</h2>
                                <p className="padding">lorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat. Pellentesque euismod ipsum non mi volutpat euismodlorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat.</p>
                        </div>
                        
                    </div>
                    <div><p className="col-text-onglet">Découvrir les événements</p></div>
                    </div>

                    <div className="deux-cols-space">
                        <img src={Enfant} alt="enfant" className="deux-cols-space-img" />
                    </div>  

                </article>

            </section>
        )
    }
}

export default Enfants