import React from 'react';
import { withRouter} from 'react-router-dom';
import Navbar from './navbar';
import '../index'

// header Diane
// instagram PA
// contact Diane
// footer PA

class Accueil extends React.Component {



    render() {
        return (
            <div>
                {<Navbar className='Navbar'/>}
            </div>
        )
    }

}



export default withRouter(Accueil);