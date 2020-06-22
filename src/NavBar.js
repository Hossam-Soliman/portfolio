import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  faHome,
  faUser,
  faCog,
  faEye,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fb from "./img/fb.png";
import lnk from "./img/lnk.png";
import git from "./img/git.png";

const NavBar = () => {
  useEffect(() => {
    document.body.style.zoom = 1.1;
  });

  return (
    <div className="nav-bar">
      <Link to="/">
        <img src="" alt=""></img>
      </Link>
      <nav>
        <Link to="/">
          <span>
            <FontAwesomeIcon icon={faHome} size="lg" />
          </span>
        </Link>
        <Link to="/about">
          <span>
            <FontAwesomeIcon icon={faUser} size="lg" />
          </span>
        </Link>
        <Link to="/skills">
          <span>
            <FontAwesomeIcon icon={faCog} size="lg" />
          </span>
        </Link>
        <Link to="/portfolio">
          <span>
            <FontAwesomeIcon icon={faEye} size="lg" />
          </span>
        </Link>
        <Link to="/contact">
          <span>
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </span>
        </Link>
      </nav>
      <div className="fb">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/hossam-soliman-2801b79b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={lnk} alt=""></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/H.DIESEL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fb} alt=""></img>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Hossam-Soliman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={git} alt=""></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
