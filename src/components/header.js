import React from 'react';
import { withRouter} from 'react-router-dom';
import logo from '../img/pousse-verte.jpg';
import imgun from '../img/headerimg.jpg';


class Header extends React.Component {



    render() {
        return (
            <section className="header">

                    <div className="blocun">
                        <img src={imgun} alt="image_kimia" />
                    </div>
                    <div className="blocdeux">

                    </div>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>

            </section>
        )
    }

}



export default withRouter(Header);