import React from 'react';
import { withRouter} from 'react-router-dom';
import logo from '../img/pousse-verte.jpg';
import imgun from '../img/restuarant.jpg';


class Header extends React.Component {



    render() {
        return (
            <section className="header">

                <div className="titre">
                    <h1>KIMIA</h1>
                </div>

                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="imgHeader">
                    <div className="blocun">
                        <img src={imgun} alt="restaurant" />
                    </div>
                    <div className="blocdeux">
                        <img src={imgun} alt="restaurant" />
                    </div>
                </div>

            </section>
        )
    }

}



export default withRouter(Header);