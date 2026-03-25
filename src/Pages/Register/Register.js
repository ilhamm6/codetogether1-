import React from "react";
import "./Register.css";

import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";

function Register() {
  return (
    <div className="register">

      <div className="top">
        <h1>khdima.ma</h1>
        <p>Créez votre compte</p>
      </div>

      <div className="card">

        <h2>S'inscrire</h2>

        <div className="row">
          <div className="inputBox">
            <FaUser className="icon"/>
            <input type="text" placeholder="Votre prénom" />
          </div>

          <div className="inputBox">
            <FaUser className="icon"/>
            <input type="text" placeholder="Votre nom" />
          </div>
        </div>

        <div className="inputBox">
          <FaEnvelope className="icon"/>
          <input type="email" placeholder="nom@exemple.com" />
        </div>

        <div className="inputBox">
          <FaPhone className="icon"/>
          <input type="text" placeholder="+212 6XX-XXXXXX" />
        </div>

        <div className="row">
          <div className="inputBox">
            <FaLock className="icon"/>
            <input type="password" placeholder="Mot de passe" />
          </div>

          <div className="inputBox">
            <FaLock className="icon"/>
            <input type="password" placeholder="Confirmer mot de passe" />
          </div>
        </div>

        <div className="check">
          <input type="checkbox" />
          <span>
            J'accepte les <b>conditions d'utilisation</b> et la{" "}
            <b>politique de confidentialité</b>
          </span>
        </div>

        <button className="btn">S'inscrire</button>

        <p className="login">
          Vous avez déjà un compte ? <span>Se connecter</span>
        </p>

      </div>

      <div className="footer">
        © 2026 khdima.ma - Tous droits réservés
      </div>

    </div>
  );
}

export default Register;