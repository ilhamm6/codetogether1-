import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaSignInAlt, FaEnvelope, FaLock } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-page">
      <div className="back-link">
        <Link to="/">
          <FaArrowLeft /> Retour à l'accueil
        </Link>
      </div>

      <div className="login-card">
        <div className="login-icon">
          <FaSignInAlt />
        </div>

        <h2>Connexion</h2>
        <p className="subtitle">Connectez-vous à votre compte</p>

        <form className="login-form">
          <label>
            <span className="label-icon">
              <FaEnvelope />
            </span>
            Email
          </label>
          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>
            <span className="label-icon">
              <FaLock />
            </span>
            Mot de passe
          </label>
          <input
            type="password"
            placeholder="Votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              Se souvenir de moi
            </label>

            <Link to="/forgot-password" className="forgot-link">
              Mot de passe oublié ?
            </Link>
          </div>

          <button type="submit" className="login-btn">
            Se connecter
          </button>
        </form>

        <div className="divider">
          <span>Vous n'avez pas de compte ?</span>
        </div>

        <div className="register-buttons">
          <Link to="/register-client" className="outline-btn">
            Créer <br /> compte client
          </Link>

          <Link to="/register-worker" className="outline-btn">
            Créer <br /> compte pro
          </Link>
        </div>
      </div>

      <div className="login-footer-box">
        <p>
          <strong>Astuce :</strong> La plateforme adaptera automatiquement votre
          type de compte (client ou professionnel) après connexion.
        </p>
      </div>
    </div>
  );
}