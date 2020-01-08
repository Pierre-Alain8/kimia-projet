import React from 'react';
import { withRouter} from 'react-router-dom';
import Header from './header'
// navbar Ricado
// header Diane
// instagram PA
// contact Diane
// footer PA

class Accueil extends React.Component {



    render() {
        return (
            <div>
            <Header />
            </div>
        )
    }

}



export default withRouter(Accueil);