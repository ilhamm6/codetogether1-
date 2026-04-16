import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaBolt,
  FaUsers,
  FaStar,
  FaHandshake,
  FaSearch,
  FaCalendarCheck,
  FaCheckCircle,
  FaHeadset,
  FaLock,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">

         <div className="badge-top">Khidma.ma</div>

         <div className="badge-sub">✨ Plateforme N°1 au Maroc</div>

         <h1 className="hero-title">À propos de</h1>

         <div className="hero-highlight">Khidma.ma</div>

         <p className="hero-text">La plateforme qui connecte les clients aux meilleurs professionnels du Maroc</p>

       </div>
       </section>

      {/* MISSION */}
      <section className="mission-section">
        <div className="mission-card">
          <div className="mission-icon">
            <FaHandshake />
          </div>

          <h2>Notre mission</h2>

          <p>
            Notre mission est de faciliter la recherche de professionnels
            qualifiés au Maroc. Khidma.ma permet aux clients de trouver
            rapidement des experts fiables et aux professionnels de développer
            leur activité.
          </p>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="how-section">
        <h2>Comment ça marche</h2>

        <div className="how-cards">
          <div className="how-step-card">
          <div className="step-number step1">01</div>
          <div className="how-icon">🔍</div>
        <h3>Trouver</h3>
        <p>Recherchez un professionnel selon votre besoin</p>
        <span className="step-arrow">→</span>
       </div>

      <div className="how-step-card">
        <div className="step-number step2">02</div>
        <div className="how-icon">⭐</div>
        <h3>Choisir</h3>
        <p>Comparez les avis et choisissez le meilleur</p>
        <span className="step-arrow">→</span>
      </div>

      <div className="how-step-card">
        <div className="step-number step3">03</div>
        <div className="how-icon">🗓️</div>
        <h3>Réserver</h3>
        <p>Réservez facilement en quelques clics</p>
      </div>
    </div>
  </section>

      {/* AVANTAGES */}
      <section className="advantages-section">
        <h2>Nos avantages</h2>

        <div className="advantages-grid">
          <div className="advantage-card">
            <div className="advantage-icon green">
              <FaCheckCircle />
            </div>
            <h3>Professionnels vérifiés</h3>
          </div>

          <div className="advantage-card">
            <div className="advantage-icon blue">
              <FaBolt />
            </div>
            <h3>Réservation rapide</h3>
          </div>

          <div className="advantage-card">
            <div className="advantage-icon purple">
              <FaHeadset />
            </div>
            <h3>Support client</h3>
          </div>

          <div className="advantage-card">
            <div className="advantage-icon orange">
              <FaLock />
            </div>
            <h3>Plateforme sécurisée</h3>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-box">
            <h3>500+</h3>
            <p>Professionnels</p>
          </div>

          <div className="stat-box">
            <h3>15K+</h3>
            <p>Utilisateurs</p>
          </div>

          <div className="stat-box">
            <h3>4.8/5</h3>
            <p>Satisfaction</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Rejoignez Khidma.ma aujourd'hui</h2>

        <div className="cta-buttons">
          <Link to="/search" className="cta-primary">
            Trouver un professionnel
          </Link>

          <Link to="/register-client" className="cta-secondary">
            Créer un compte
          </Link>
        </div>
      </section>
    </div>
  );
}