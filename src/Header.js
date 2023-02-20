import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser,faHeart, faShoppingBag,   } from '@fortawesome/free-solid-svg-icons'
import img from './adidasLogo.png'
export default function Header(){
    return(
        <div className="header">                  
            <div className="left"><Link to="/" ><img src={img} alt=""/></Link></div>
            <nav className="center">
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li> <Link to="/Products" >Products</Link></li>

                </ul>
            </nav>
            <div className="right">
                <div className="search">
                    <input/>
                    <p><FontAwesomeIcon className="searchIcon" icon={faSearch}/></p>
                </div>
                <div className="icons">
                    <FontAwesomeIcon className="icon" icon={faUser} />
                    <FontAwesomeIcon className="icon" icon={faHeart} />
                    <FontAwesomeIcon className="icon" icon={faShoppingBag} />
                </div>
            </div>
        </div>
    )
}