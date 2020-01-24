import React from 'react';
import classnames from "classnames";
import { Link } from 'react-router-dom'; 

// var { Router, Route, IndexRoute, Link } = ReactRouter;



class Navabar extends React.Component {
    
    
    constructor(props) {
        super(props);
    
        this.state = {
          
           prevScrollpos: window.pageYOffset,
            visible: true
        };
      

    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);

    }
    
    handleScroll = () => {
        const { prevScrollpos } = this.state;
      
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        if (currentScrollPos > 550) {

            this.setState({
                prevScrollpos: currentScrollPos,
                visible
              });
            
        } 

    };

    

  
    
    render () {
        
        return(
        
            <section className={classnames("Navbar", {
                "Navbar--hidden": !this.state.visible
            })}>

                <nav className="header-nav">
                    <div className="navbar-brand"><h3>Kimia</h3></div>
                        <ul>
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/Cantine">Cantine</Link></li>
                            <li><Link to="/Epicerie">Epicerie</Link></li>
                            <li><Link to="/Enfants">Enfants</Link></li>
                            <li><Link to="/Association">Association</Link></li>
                            <li><Link to="/Evénements">Evénements</Link></li>
                            <li><Link to="/Equipe">Equipe</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                </nav>
            
            </section>
     

        )
    }
}

export default Navabar




//      // const debounce = (func, wait = 10, immediate = true) => {
        //     let timeOut
        //     return () => {
        //       let context = this,
        //         args = arguments
        //       const later = () => {
        //         timeOut = null
        //         if (!immediate) func.apply(context, args)
        //       }
        //       const callNow = immediate && !timeOut
        //       clearTimeout(timeOut)
        //       timeOut = setTimeout(later, wait)
        //       if (callNow) func.apply(context, args)
        //     }
        //   }