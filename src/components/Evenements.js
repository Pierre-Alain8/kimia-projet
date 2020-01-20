import React from 'react';
import './evenement.css'

class Evenments extends React.Component{
    render() {
        return(
            <section className="component-event">
                <h1>Evenments</h1>
                    <div className="month-list">
                        <ul className="list-description">
                            <li className="month-item">janvier</li>
                            <li className="month-item">févier</li>
                            <li className="month-item">mars</li>
                            <li className="month-item">avril</li>
                            <li className="month-item">mai</li>
                            <li className="month-item">juin</li>
                            <li className="month-item">juillet</li>
                            <li className="month-item">aout</li>
                            <li className="month-item">septembre</li>
                            <li className="month-item">octoble</li>
                            <li className="month-item">novembre</li>
                            <li className="month-item">décembre</li>
                        </ul>
                    </div>
            </section>
        )
    }
}

export default Evenments