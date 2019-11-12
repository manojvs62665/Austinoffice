import React,{Component} from 'react';
import './NavigationItem.css';
import ComLogo from '../../assets/images/Group 29@3x.png';
import { Link } from 'react-scroll';



class NavigationItem extends Component{
    navHamburger = () =>  {
        let x = document.getElementById("NavigationHam");
        if (x.className === "Navigation-anchor") {
          x.className += "responsive";
        } else {
          x.className = "Navigation-anchor";
        }
      }
    render(){
        return(
            <div className="NavigarionBar" >
                <div className="Navigation">
                    <div className="navigation-logo">
                        <img className="Comlogo" src={ComLogo} alt="Company Logo"/>
                    </div>
                    <div className="Navigation-anchor" id="NavigationHam">
                    <Link
                        activeClass="active"
                        to="whyaustin"
                        className="nav1"
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration= {1000}
                    >why austin</Link>
                    <Link
                        activeClass="active"
                        to="austinofficemarket"
                        className="nav1"
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration= {1000}
                    >austin office market</Link>
                    <Link
                        activeClass="active"
                        to="topofficeowners"
                        className="nav1"
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration= {1000}
                    >top office owners</Link>
                    <Link
                        activeClass="active"
                        to="austinlandscape"
                        className="nav1"
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration= {1000}
                    >austin landscape</Link>
                    {/* <li className="nav1" ><a href="">why austin</a></li>
                    <li className="nav2" ><a href="">austin office market</a></li>
                    <li className="nav3" ><a href="">top office owners</a></li>
                    <li className="nav4" ><a href="">austin landscape</a></li> */}
                    </div>
                </div>
                    <input type="checkbox" id="chk"/>
                    <label htmlFor="chk" className="icon" onClick="navHamburger()">
                        <i className="fa fa-bars"></i>
                    </label> 
            </div> 
        )
    }
}

export default NavigationItem;