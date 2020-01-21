import React from 'react';
import { withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Pdpcol extends React.Component {

    render() {

        return(

            <div className="pdpcol">

                <article className="divpdp">

                    <section className="trois-cols center col-text" >
                            
                            <div className="width80">
                                <p>Restez informés de notre actualité</p>
        
                                <div className="divinput center">
                                    <div>
                                        <input type="text" name="email" placeholder="email"></input>
                                    </div>
                                    <div>
                                        <button type="submit" name="submit">OK</button>
                                    </div>
                                </div>
                            </div>
                      
                    </section>

                    <section className="trois-cols add-border-lr center">
                    <   div className="width80">
                            <p id="devise" >Cultivons le vivre et le faire ensemble dans le respect de l'autre et de l'environnement.</p>
                        </div>
                    </section>

                    <section className="trois-cols center col-text">
                        <div className="width80">
                            <p>Ne manquez rien de l'envers du décor</p>
                            <div className="icons">
                                <div><FontAwesomeIcon icon={faFacebook} /></div>
                                <div><FontAwesomeIcon icon={faInstagram} /></div>
                                <div><FontAwesomeIcon icon={faEnvelope} /></div>
                            </div>
                        </div>
                    </section>

                </article>

            </div>

        )
    }
}

export default withRouter(Pdpcol);