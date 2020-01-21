import React from 'react';
import Navevent from './Navevent'
import './evenement.css'

class Evenments extends React.Component{
    render() {
        return(
            <section className="component-event">
                <h1>Evenments</h1>
                <Navevent />
                
            </section>
        )
    }
}

export default Evenments