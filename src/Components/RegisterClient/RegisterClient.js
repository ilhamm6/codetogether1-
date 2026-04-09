import React, { useState } from "react";
import "./RegisterClient.css";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLock,
} from "react-icons/fa";

export default function RegisterClient() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
    confirmPassword: "",
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="register-client-page">
      <div className="back-link">
        <Link to="/">
          <FaArrowLeft /> Retour à l'accueil
        </Link>
      </div>

      <div className="register-client-card">
        <div className="register-icon">
          <FaUser />
        </div>

        <h2>Inscription Client</h2>
        <p className="subtitle">
          Créez votre compte pour trouver des professionnels
        </p>

        <form className="register-form" onSubmit={handleSubmit}>
          <label>
            <span className="label-icon">
              <FaUser />
            </span>
            Nom complet *
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Ex: Mohammed Ahmed"
            value={formData.fullName}
            onChange={handleChange}
          />

          <label>
            <span className="label-icon">
              <FaEnvelope />
            </span>
            Email *
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
          />

          <label>
            <span className="label-icon">
              <FaPhone />
            </span>
            Téléphone *
          </label>
          <input
            type="text"
            name="phone"
            placeholder="+212 6XX XXX XXX"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>
            <span className="label-icon">
              <FaMapMarkerAlt />
            </span>
            Ville *
          </label>
          <input
            type="text"
            name="city"
            placeholder="Sélectionnez votre ville"
            value={formData.city}
            onChange={handleChange}
          />

          <label>
            <span className="label-icon">
              <FaLock />
            </span>
            Mot de passe *
          </label>
          <input
            type="password"
            name="password"
            placeholder="Minimum 8 caractères"
            value={formData.password}
            onChange={handleChange}
          />

          <label>
            <span className="label-icon">
              <FaLock />
            </span>
            Confirmer le mot de passe *
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Retapez votre mot de passe"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <label className="terms-check">
            <input
              type="checkbox"
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
            />
            <span>
              J'accepte les{" "}
              <a href="/">conditions d'utilisation</a> et la{" "}
              <a href="/">politique de confidentialité</a>
            </span>
          </label>

          <button type="submit" className="register-btn">
            Créer mon compte
          </button>
        </form>

        <p className="bottom-text">
          Vous avez déjà un compte ? <Link to="/login">Se connecter</Link>
        </p>
      </div>
    </div>
  );
}