import React from 'react';
import { withRouter} from 'react-router-dom';
import logo from '../img/logocoupe.jpg';
import imgun from '../img/headerimg.jpg';


class Header extends React.Component {



    render() {
        return (
            <section className="header">

                    <div className="headertrois">

                        <div className="blocun">
                            <img src={imgun} alt="image_kimia" />
                        </div>
                        <div className="blocdeux">
                            <p>Bienvenue chez vous</p>
                        </div>
                    
                    </div>

                    <img className="taillelogo" src={logo} alt="logo" />

            </section>
        )
    }

}



export default withRouter(Header);