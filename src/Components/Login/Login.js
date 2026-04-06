import React, { useState } from "react";
import "./Login.css";
import { MdOutlineEmail } from "react-icons/md";


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <h1 className="logos">khdima.ma</h1>
      <p className="welcome">Bienvenue</p>

      <div className="login-card">
        <h2>Se connecter</h2>

        <label>Adresse e-mail</label>
        <div className="input-group">
          <input type="email" placeholder="nom@exemple.com" />
        </div>

        <label>Mot de passe</label>
        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
          />
          <span
            className="eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            👁
          </span>
        </div>

        <div className="forgot">
          <a href="#">Mot de passe oublié ?</a>
        </div>

        <button className="login-btn">Se connecter</button>

        <p className="signup">
          Vous n’avez pas de compte ? <a href="#">S'inscrire</a>
        </p>
     
      </div>  
    </div>
  );
}