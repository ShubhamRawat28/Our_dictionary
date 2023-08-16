import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" ;
import {faTwitter, faInstagram, faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4> Regular Words </h4>
            <a href="/formal">
                <p>Formal</p>
            </a>
            <a href="/informal">
                <p>Informal</p>
            </a>
            <a href="/common">
                <p>Common</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Genz</h4>
            <a href="/general">
                <p>General</p>
            </a>
            <a href="/popular">
                <p>Popular</p>
            </a>
            <a href="/common">
                <p>Common</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Jargons</h4>
            <a href="/corporate">
                <p>Corporate</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Ettiquettes</h4>
            <a href="/phone">
                <p>Phone</p>
            </a>
            <a href="/email">
                <p>Email</p>
            </a>
            <a href="/text">
                <p>Text</p>
            </a>
            <a href="/in-person">
                <p>In person</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> 
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> 
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> 
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> 
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
            <div className="sb__footer-copyright">
                <p>
                    2023 © All right reserved.
                </p>
            </div>
            <div className="sb__footer-below-links">
                <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                <a href="/privacy"><div><p>Privacy</p></div></a>
                <a href="/security"><div><p>Security</p></div></a>
                <a href="/cookie"><div><p>Cookie</p></div></a>
            </div>
        </div>
      </div>
    </div>
    );
}

export default Footer;