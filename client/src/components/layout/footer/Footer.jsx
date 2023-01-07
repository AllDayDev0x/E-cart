import React from "react";
import appStore from "../../../images/Appstore.png";
import playStore from "../../../images/playstore.png";
import "./footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import logo from "../../../images/logoDark.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Download Our App</h4>
        <img src={playStore} alt="playStore" />
        <img src={appStore} alt="AppStore" />
      </div>
      <div className="middleFooter">
        <Link to="/">
          <img src={logo} alt="E-Cart" />
        </Link>
        <p>Developed By <a href="#">Stephan U</a> </p>
      </div>
      <div className="rightFooter">
        <h4>Follow Me:</h4>

        <a
          href="https://twitter.com/star0713ok"
          target="blank"
        >
          <TwitterIcon /> Twitter
        </a>
        <a href="https://github.com/star0713" target="blank">
          <GitHubIcon /> Github
        </a>
        <a href="https://linkedin.com/in/stephanullrich-26ab8b257/" target="blank">
          <LinkedInIcon /> LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
