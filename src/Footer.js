import  './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser ,   } from '@fortawesome/free-solid-svg-icons'

export default function Footer(){
    return(
        <>
        <div class="footer-dark">
            <div class="row">
                    <div class="item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Projects</a></li>
                        </ul>
                    </div>
                    <div class=" item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="  text">
                        <h3>Company Name</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div class=" social">
                        <FontAwesomeIcon className="icon" icon={faUser} />
                        <FontAwesomeIcon className="icon" icon={faUser} />
                        <FontAwesomeIcon className="icon" icon={faUser} />
                        <FontAwesomeIcon className="icon" icon={faUser} />
                    </div>
            </div>
            <p class="copyright">Company Name © 2023</p>
        </div>
        </>
    )
}