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

    // validation
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

    // redirect success
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
          
          {/* form content same */}
          
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