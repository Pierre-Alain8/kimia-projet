import React from 'react'


class Events extends React.Component{


    render() {
    
        const { eventsId, eventsTitle, eventsImg, eventsContent} = this.props
        
        return (
            <div id={eventsId} className="eventsItem">
                
                <h2 className="eventsTitle">
                    {eventsTitle}
                </h2>
                <img src={eventsImg} alt={eventsTitle}/> 
                
                
                <p className="eventsContent">
                    {eventsContent}
                </p>
            </div>
        )
    }
}

export default (Events)
