import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <a target="_blank" href="https://github.com/Grillinsky">
          <i className="fa fa-github fa-2x"></i>
          <div className="hide-element">Link a GitHub</div>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/martin-grillo-a78927201/"
        >
          <i className="fa fa-linkedin fa-2x"></i>
          <div className="hide-element">Link a LinkedIn</div>
        </a>
        <a target="_blank" href="https://www.instagram.com/grillinski/">
          <i className="fab fa-instagram fa-2x"></i>
          <div className="hide-element">Link a Instagram</div>
        </a>
        <a target="_blank" href="https://twitter.com/MartinGrillo22">
          <i className="fab fa-twitter fa-2x"></i>
          <div className="hide-element">Link a Twitter</div>
        </a>
        <a target="_blank" href="https://martingrillo.netlify.app">
          <i className="fas fa-portrait fa-2x"></i>
          <div className="hide-element">Link a Portafolio</div>
        </a>
      </div>
      <div className="footerContainer">
        &copy; Martin Grillo 2021 / Sitio NO oficial / Sin relación con
        Lollapalooza
      </div>
    </footer>
  );
}

export default Footer;
