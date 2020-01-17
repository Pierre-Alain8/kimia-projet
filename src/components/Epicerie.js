import React from 'react';
import epicerie from '../img/Silos_epicerie.jpg'


class Epicerie extends React.Component{

    render() {
        return(
            <section className="component">
                   
                <div className="img-content">
                    <img src={epicerie} alt="epicerie" />
                </div>
                
                <article className="cart-bloc" >
                        
                    <div className="title-bloc" >
                        
                        <h1>EPICERIE</h1>
                        <h2>des bons produits locaux pour le quotidient</h2>
                        <p>lorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat. Pellentesque euismod ipsum non mi volutpat euismod.lorem ipsum Ut aliquet porta egestas. Pellentesque euismod ipsum non mi volutpat euismod.lorem ipsum Ut aliquet porta egestas.</p>
                    </div>
                   

                    <div className="wrapper">

                    <div className="cart-content">
                    <div className="text-content item">
                        <h5>confiserie</h5>
                    </div>
                    <div className="text-content item">
                        <h5>fruits secs</h5>
                    </div>
                    <div className="text-content item">
                        <h5>confiserie</h5>
                    </div>
                    <div className="text-content item">
                        <h5>fruits secs</h5>
                    </div>
                    <div className="text-content item">
                        <h5>confiserie</h5>
                    </div>
                    <div className="text-content item">
                        <h5>fruits secs</h5>
                    </div>
                    </div>
                
                    
                
                
                    <div className="cart-content">
                    <div className="text-content item">
                        <h5>confiserie</h5>
                    </div>
                    <div className="text-content item">
                        <h5>fruits secs</h5>
                    </div>
                    <div className="text-content item">
                        <h5>confiserie</h5>
                    </div>
                    <div className="text-content item">
                        <h5>fruits secs</h5>
                    </div>
                    <div className="text-content item">
                        <h5>confiserie</h5>
                    </div>
                    <div className="text-content item">
                        <h5>fruits secs</h5>
                    </div>
                    </div>
                    </div>
                </article>

            </section>
        )
    }
}

export default Epicerie