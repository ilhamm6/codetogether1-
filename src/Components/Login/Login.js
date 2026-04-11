import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaSignInAlt, FaEnvelope, FaLock } from "react-icons/fa";
import api from "../../services/api"; // change path if needed

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [messageErreur, setMessageErreur] = useState("");
  const [messageSucces, setMessageSucces] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setMessageErreur("");
    setMessageSucces("");

    if (!email || !password) {
      setMessageErreur("Veuillez remplir tous les champs.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/connexion", {
        email: email,
        mot_de_passe: password,
      });

      const utilisateur = response.data.utilisateur;
      const token = response.data.token;

      localStorage.setItem("token", token);
      localStorage.setItem("utilisateur", JSON.stringify(utilisateur));

      setMessageSucces(
        `Connexion réussie. Vous êtes connecté en tant que ${utilisateur.role}.`
      );

      // Redirection selon le rôle
      if (utilisateur.role === "travailleur") {
        navigate("/workers");
      } else if (utilisateur.role === "client") {
        navigate("/");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);

      if (error.response && error.response.data && error.response.data.message) {
        setMessageErreur(error.response.data.message);
      } else {
        setMessageErreur("Une erreur est survenue lors de la connexion.");
      }
    } finally {
      setLoading(false);
    }
  };

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

        {messageErreur && (
          <p style={{ color: "red", marginBottom: "10px" }}>{messageErreur}</p>
        )}

        {messageSucces && (
          <p style={{ color: "green", marginBottom: "10px" }}>
            {messageSucces}
          </p>
        )}

        <form className="login-form" onSubmit={handleLogin}>
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

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Connexion..." : "Se connecter"}
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