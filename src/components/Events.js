import React from 'react';

class Events extends React.Component{


    render() {

        const { eventsId, eventsTitle, eventsImg, eventsContent} = this.props

        return (
            <div id={eventsId} className="eventsItem">

                <h2 className="eventsTitle">
                    {eventsTitle}
                </h2>

                <img src={`img/${eventsImg}`} alt={eventsTitle} />

                <button className="eventsContent" >
                    <a target="_blank" href="https://weezevent.com/fr/">
                    {eventsContent}
                    </a>
                </button>
            </div>
        )
    }
}

export default (Events)
