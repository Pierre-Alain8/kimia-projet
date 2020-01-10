import React from 'react';
import { withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Pdpcol extends React.Component {

    render() {

        return(

            <section className="pdpcol">

                <div className="divpdp">

                    <div className="pdpcolun" >
                   
                            <p>Restez informés de notre actualité</p>
    
                            <div className="divinput">
                                <div>
                                    <input type="text" name="email" placeholder="email"></input>
                                </div>
                                <div>
                                    <button type="submit" name="submit">OK</button>
                                </div>
                            </div>
                      
                    </div>

                    <div className="pdpcoldeux">
                        <p>Cultivons le vivre et le faire ensemble dans le respect de l'autre et de l'environnement.</p>
                    </div>
                    <div className="pdpcoltrois">
                        <p>Ne manquez rien de l'envers du décor</p>
                        <div className="icons">
                            <div><FontAwesomeIcon icon={faFacebook} /></div>
                            <div><FontAwesomeIcon icon={faInstagram} /></div>
                            <div><FontAwesomeIcon icon={faEnvelope} /></div>
                        </div>
                    </div>

                </div>

            </section>

        )
    }
}

export default withRouter(Pdpcol);