import React, { useState } from "react";
import "./RegisterWorker.css";
import { Link, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaBriefcase,
  FaUpload,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaIdCard,
  FaDollarSign,
  FaCalendarAlt,
  FaFileAlt,
  FaLock,
} from "react-icons/fa";

export default function RegisterWorker() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    cin: "",
    profession: "",
    hourlyRate: "",
    availability: "",
    description: "",
    password: "",
    confirmPassword: "",
    acceptedTerms: false,
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.city ||
      !formData.profession ||
      !formData.hourlyRate ||
      !formData.availability ||
      !formData.description ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    if (!formData.acceptedTerms) {
      alert("Veuillez accepter les conditions");
      return;
    }

    navigate("/auth-success?type=worker");
  };

  return (
    <div className="register-worker-page">
      <div className="back-link">
        <Link to="/">
          <FaArrowLeft /> Retour à l'accueil
        </Link>
      </div>

      <div className="register-worker-card">
        <div className="register-icon">
          <FaBriefcase />
        </div>

        <h2>Inscription Professionnel</h2>
        <p className="subtitle">
          Créez votre profil et commencez à recevoir des demandes de clients
        </p>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="photo-section">
            <label className="section-label center-label">
              Photo de profil *
            </label>

            <div className="upload-circle">
              <FaUpload />
            </div>

            <label htmlFor="profileImage" className="upload-btn">
              Télécharger une photo
            </label>
            <input
              id="profileImage"
              type="file"
              name="profileImage"
              accept="image/*"
              onChange={handleChange}
              hidden
            />
          </div>

          <div className="section-divider"></div>

          <h3 className="section-title">
            <FaUser /> Informations personnelles
          </h3>

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

          <div className="two-columns">
            <div>
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
            </div>

            <div>
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
            </div>
          </div>

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
              <FaIdCard />
            </span>
            CIN (Optionnel)
          </label>
          <input
            type="text"
            name="cin"
            placeholder="Ex: AB123456"
            value={formData.cin}
            onChange={handleChange}
          />

          <p className="small-note">
            Aide à établir un profil de confiance aux clients
          </p>

          <h3 className="section-title">
            <FaBriefcase /> Informations professionnelles
          </h3>

          <label>
            <span className="label-icon">
              <FaBriefcase />
            </span>
            Profession *
          </label>
          <input
            type="text"
            name="profession"
            placeholder="Entrez votre profession"
            value={formData.profession}
            onChange={handleChange}
          />

          <label>
            <span className="label-icon">
              <FaDollarSign />
            </span>
            Tarif horaire (DH) *
          </label>
          <input
            type="number"
            name="hourlyRate"
            placeholder="Ex: 150"
            value={formData.hourlyRate}
            onChange={handleChange}
          />

          <label>
            <span className="label-icon">
              <FaCalendarAlt />
            </span>
            Disponibilité *
          </label>
          <input
            type="text"
            name="availability"
            placeholder="Disponible"
            value={formData.availability}
            onChange={handleChange}
          />

          <label>
            <span className="label-icon">
              <FaFileAlt />
            </span>
            Description de vos services *
          </label>
          <textarea
            name="description"
            placeholder="Décrivez votre expérience, vos compétences et les services que vous proposez..."
            value={formData.description}
            onChange={handleChange}
          ></textarea>

          <h3 className="section-title">
            <FaLock /> Sécurité
          </h3>

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
              J'accepte les <a href="/">conditions d'utilisation</a> et la{" "}
              <a href="/">politique de confidentialité</a>. Je comprends que mon
              profil sera vérifié avant publication.
            </span>
          </label>

          <button type="submit" className="register-btn">
            Créer mon profil professionnel
          </button>
        </form>

        <p className="bottom-text">
          Vous avez déjà un compte ? <Link to="/login">Se connecter</Link>
        </p>
      </div>
    </div>
  );
}