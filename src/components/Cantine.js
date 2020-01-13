import React from 'react';
import kimiaCantine from '../img/kimia-cantine.jpg'


class Cantine extends React.Component {



    render() {
        return (
            <div className="cantineContainer">

                <article className ="articleCantine">

                    <h1 id="titleCantine">LA CANTINE </h1>

                    <h2> Une cuisine saine et responsable </h2>

                    <p id="cantineContent">  
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur soluta qui repellendus aspernatur. 
                        Ex ea, quod amet doloribus animi assumenda nihil ut delectus earum ratione, nemo enim nkjblez:fnlzfen zijefihef e 
                    </p>

                    <div className="keysWord">
                        
                        <span id="mots-cles">

                            <ul>
                                <li>Produits locaux</li>
                                <li>Produits relavisé</li>
                                <li>Cuisine faite maison</li>
                            </ul>                            

                        </span>

                        <span id="description">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Tenetur soluta qui repellendus aspernatur. Ex ea, quod amet doloribus an.....
                            </p>
                        </span>

                    </div>

                </article>

                <article className ="cantineCover">

                    <img src={kimiaCantine} alt="kimia cantine"/>

                </article>



            </div>
            
        )
    }
}

export default (Cantine);