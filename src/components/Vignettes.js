import React from 'react';

class Vignettes extends React.Component {

    render() {

        const {vignetteId, vignetteImg, vignetteLegend} = this.props

        return (
            <figure id={vignetteId} className="item">

                <img src={require(`../img/${vignetteImg}`)} alt="epicerie"/> 

                    <figcaption className="glocery vignette-row-un">{vignetteLegend}</figcaption>

            </figure>
            
        )
    }
}

export default (Vignettes)