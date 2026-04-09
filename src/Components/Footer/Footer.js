import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-col">
          <h3>khdima.ma</h3>
          <p>Trouvez les meilleurs professionnels au Maroc</p>
        </div>

        <div className="footer-col">
          <h4>Liens rapides</h4>
          <a href="#">FAQ</a>
          <a href="#">À propos</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-col">
          <h4>Suivez-nous</h4>

          <div className="social-icons">
            <a href="#"><FaFacebookF/></a>
            <a href="#"><FaTwitter/></a>
            <a href="#"><FaLinkedinIn/></a>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 ServicesMaroc. Tous droits réservés.
      </div>

    </footer>
  );
}

export default Footer;