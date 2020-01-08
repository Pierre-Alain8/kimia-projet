import React from 'react';
import { withRouter} from 'react-router-dom';
// navbar Ricado
// header Diane
// instagram PA
import Instagram from './instagram';
// contact Diane
// footer PA

class Accueil extends React.Component {



    render() {
        return (
            <div>
                <Instagram />
            </div>
        )
    }

}



export default withRouter(Accueil);