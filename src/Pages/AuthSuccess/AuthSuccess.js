import React from "react";
import "./AuthSuccess.css";
import { Link, useLocation } from "react-router-dom";
import { FaCheckCircle, FaHome, FaArrowRight } from "react-icons/fa";

export default function AuthSuccess() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const type = params.get("type");

  let title = "Opération réussie !";
  let subtitle =
    "Votre opération a été effectuée avec succès. Vous pouvez maintenant continuer.";
  let point1 = "Compte activé et sécurisé";
  let point2 = "Connexion réussie";
  let point3 = "Prêt à explorer la plateforme";

  if (type === "login") {
    title = "Connexion réussie !";
    subtitle =
      "Vous êtes maintenant connecté. Vous pouvez commencer à explorer les professionnels disponibles.";
    point1 = "Compte activé et sécurisé";
    point2 = "Connexion réussie";
    point3 = "Prêt à explorer la plateforme";
  }

  if (type === "client") {
    title = "Compte client créé avec succès !";
    subtitle =
      "Votre compte client a été créé avec succès. Vous pouvez maintenant rechercher les professionnels disponibles.";
    point1 = "Compte client activé";
    point2 = "Inscription réussie";
    point3 = "Prêt à trouver un professionnel";
  }

  if (type === "worker") {
    title = "Compte professionnel créé avec succès !";
    subtitle =
      "Votre compte professionnel a été créé avec succès. Vous pouvez maintenant continuer et découvrir la plateforme.";
    point1 = "Compte professionnel activé";
    point2 = "Inscription réussie";
    point3 = "Profil prêt à être utilisé";
  }

  return (
    <div className="auth-success-page">
      <div className="auth-success-card">
        <div className="success-icon-wrapper">
          <div className="success-circle"></div>
          <FaCheckCircle className="success-icon" />
        </div>

        <h2>{title}</h2>

        <p className="success-subtitle">{subtitle}</p>

        <div className="success-points">
          <p><span className="dot green"></span> {point1}</p>
          <p><span className="dot green"></span> {point2}</p>
          <p><span className="dot purple"></span> {point3}</p>
        </div>

        <Link to="/search" className="success-primary-btn">
          Voir les professionnels <FaArrowRight />
        </Link>

        <Link to="/" className="success-secondary-btn">
          <FaHome /> Retour à l'accueil
        </Link>
      </div>

      <p className="success-footer">
        Bienvenue sur <span>Khidma</span>
      </p>
    </div>
  );
}