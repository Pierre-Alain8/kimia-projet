import React from 'react';
import { withRouter } from "react-router-dom";
// import kimiaCantine from '../img/kimia-cantine.jpg'


class Cantine extends React.Component {



    render() {
        return (

            <section className="sectionCantine">

                <article className="cantineContent">

                    <div className="contentContenair">  

                        <h1>LA CANTINE  </h1>
                        <h2>Une cuisine saine et responsable</h2>

                        <div className="pTest">
                            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur soluta  qui repellendus aspernatur. Ex ea, quod amet doloribus animi assumenda nihil ut delectus earum ratione. </p>
                        </div>
                    </div>

                </article>

                <article className="cantineCover">

                </article>
            </section>
        
        // <section className="cantine">

        //     <section className="cantineContainer">

        //         <article className ="articleCantine">

        //             <div id="cantineContent" > 
        //                 <h1 id="titleCantine">LA CANTINE </h1>
                        
        //                 <h2> Une cuisine saine et responsable </h2>
                    

        //                 <p>  
        //                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur soluta qui repellendus aspernatur. Ex ea, quod amet doloribus animi assumenda nihil ut delectus earum ratione.
        //                 </p>
        //             </div>

        //             <div className="keysWord">
                        
        //                 <div id="mots-cles">

        //                     <p>Produits locaux</p>
        //                     <p>Produits relavisé</p>
        //                     <p>Cuisine faite maison</p>
        //                 </div>

        //                 <div id="description">
                           
        //                       <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur soluta qui repellendus aspernatur. Ex ea, quod amet doloribus an.....</p>
                           
        //                 </div>

        //             </div>

        //         </article>

        //         <article className ="cantineCover">

        //             <img src={kimiaCantine} alt="kimia cantine"/>

        //         </article>



        //     </section>
            
        // </section>
            
        )
    }
}

export default withRouter(Cantine);