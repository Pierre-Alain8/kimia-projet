import React from 'react';
import kimiaContact from '../img/kimia-contact.jpg';

class Contact extends React.Component{
    render() {
        return(
           
        <section className="component">
            
        <section className="component-contenair">

            <article className="contact-content-1"> {/* className="trois-cols" */}

                <div className="title-contact-kimia">

                    <h2>Contact</h2>

                </div>

                <div className="contact-form-kimia"> 
                
                    <form action="mailto:?to=sarahnurancali@gmail.com?&body=" method="post">

                        <label>Nom :</label>
                        <input type="text" id="nameInput" /> 

                        <label>Prénom :</label>
                        <input type="text"  id="prenomInput"/> 
                        
                

                        <label>Email :</label>
                        <input type="email" required  id="emailInput"/> 
                        
                        
                        <label>Téléphone :</label>
                        <input type="text" />

                        <label >Votre message </label>
                        <textarea type="text" name=""  id="messageInput"/>

                        <span id="submit-contact">
                            <input type="submit" value="C'est parti" id="submit-button"></input>
                        </span>

                    </form>
                </div>

            </article>

            <article className="contact-content-2"> {/* className="trois-cols" */}
                
                <div className="contact-adresse-title">

                    <h2>Kimia Cafe</h2>

                </div>

                <div className="contact-adresse"> 

                    <p id="adresse-1">
                        17, rue  Julien Lacroix
                    </p>

                    <p id="adresse-2">
                        75020 PARIS 
                        <br />
                        Tel : 06.63.43.36.04 
                        <br />
                        bonjour@kimiacafe.fr
                    
                    </p>

                    <p id="adresse-3"> 
                        Accès 
                        <br />
                        Métro ligne 2 (Ménilmontant) 
                        <br />
                        Bus ligne
                    </p> 
                    <div className="adresse-map">
                        <img src={kimiaContact} alt="kimia contact"/>
                    </div>

                </div>

            </article>

            <article className="contact-content-3"> {/* className="trois-cols" */}

                <div className="contact-horaire">
                    <h2>HORAIRES </h2>

                    <p>De 8h à 20h tous les jours </p>

                    <p className="horaire-content-1">Brunch </p>
                    <p> Samedi et dimanche de 11h à 15h </p>

                    <p className="horaire-content-2">Pause déjeuner </p>
                    <p>Tous les jours de 12h à 14h30</p>
                </div>

                <div className="contact-recrutement">

                    <h2>RECRUTEMENT </h2>

                    <p className="recrutement-content">
                        Rejoindre l'équipe, faire un stage
                        ou proposer une collaboration :
                    </p>

                    <p className="recrutement-content-2">
                        teamkimiacafe@kimiacafe.fr 
                    </p>


                </div>

            </article>

            

        </section>
    </section>
        )
    }
}

export default Contact