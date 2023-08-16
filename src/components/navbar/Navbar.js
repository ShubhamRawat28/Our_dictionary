import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" ;
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons" ;
import "./navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <a href="index.js">
            <div className="logo">
                <FontAwesomeIcon icon={faBookOpenReader} />
                   Our Dictionary
            </div>
          </a>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a className="active" href="index.js">
                  Home
                </a>
              </li>
              <li>
                <a href="index.js">Meaning</a>
              </li>
              <li>
                <a href="index.js">Synonyms</a>
              </li>
              <li>
                <a href="index.js">Antonyms</a>
              </li>
              <li>
                <a href="index.js">Images</a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
