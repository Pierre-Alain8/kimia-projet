import React from 'react';
import Enfant from '../img/enfant.jpg'


class Enfants extends React.Component{
    render() {
        return(
            <section className="bloc-content">
               
                    
                    
                <div className="wrap-bloc">
                    <h1>Enfants</h1>
                    <div className="bloc_1">
                        <h2>ils meritent le meilleurs. Nous leur offrons le meilleur</h2>
                            <p>lorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat. Pellentesque euismod ipsum non mi volutpat euismod.Pellentesque euismod ipsum non mi volutpat euismod. Curabitur mollis, velit eu venenatis semper, mi dolor scelerisque nisi, id interdum risus nulla quis ligula. Phasellus tortor sem, tincidunt id tortor fermentum, tincidunt sagittis turpis. </p>
                    </div>

                    <div className="bloc_2">
                        <div className="text-content item1">
                            <h2>aire de jeux</h2>
                                <p>lorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat. Pellentesque euismod ipsum non mi volutpat euismod.lorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat. Pellentesque euismod ipsum non mi volutpat euismod</p>
                        </div>
                        <div className="text-content item2">
                            <h2>atelier et stage</h2>
                                <p>lorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat. Pellentesque euismod ipsum non mi volutpat euismod lorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat. Pellentesque euismod ipsum non mi volutpat euismod </p>
                        </div>
                        <div className="text-content item3">
                            <h2>anniversaire</h2>
                                <p>lorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat. Pellentesque euismod ipsum non mi volutpat euismodlorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat. Pellentesque euismod ipsum non mi volutpat euismod</p>
                        </div>
                        
                    </div>
                    <div><h2 className="event">découvrir les événements</h2></div>
                    </div>
                    <div className="bloc_3">
                        <img src={Enfant} alt="enfant" className="pic-img" />
                    </div>  
                    
            </section>
        )
    }
}

export default Enfants