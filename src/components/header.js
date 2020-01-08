import React from 'react';
import { withRouter} from 'react-router-dom';


class Header extends React.Component {



    render() {
        return (
            <div className="header">
                <div className="titre">
                    <h1>KIMIA</h1>
                </div>
            </div>
        )
    }

}



export default withRouter(Header);