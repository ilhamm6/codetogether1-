import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaBriefcase,
  FaMapMarkerAlt,
  FaStar,
  FaUserTie,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="home-page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Connectez-vous avec les Meilleurs
            <br />
            Professionnels du Maroc
          </h1>

          <p>
            Trouvez des experts qualifiés ou proposez vos services
          </p>

          <div className="hero-cards">
            <div className="choice-card">
              <div className="choice-icon">
                <FaSearch />
              </div>
              <h3>Je cherche un travailleur</h3>
              <p>
                Trouvez rapidement des professionnels fiables selon votre ville
                et vos besoins.
              </p>
              <Link to="/register-client" className="choice-btn">
                Commencer maintenant →
              </Link>
            </div>

            <div className="choice-card">
              <div className="choice-icon">
                <FaBriefcase />
              </div>
              <h3>Je cherche un emploi</h3>
              <p>
                Créez votre profil professionnel et recevez des demandes de
                clients qualifiés.
              </p>
              <Link to="/register-worker" className="choice-btn">
                Démarrer comme pro →
              </Link>
            </div>
          </div>

          <div className="hero-stats">
            <div>
              <h4>+ 500+</h4>
              <span>Professionnels vérifiés</span>
            </div>
            <div>
              <h4>+ 15K+</h4>
              <span>Clients actifs</span>
            </div>
            <div>
              <h4>4.8/5</h4>
              <span>Note moyenne</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <h2>Pourquoi choisir Khdima.ma ?</h2>
        <p className="section-subtitle">
          La plateforme de confiance pour connecter clients et professionnels.
        </p>

        <div className="features">
          <div className="feature-box">
            <div className="feature-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Multi-Villes</h3>
            <p>
              Trouvez des professionnels dans les principales villes du Maroc.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">
              <FaStar />
            </div>
            <h3>Avis Clients</h3>
            <p>
              Consultez les évaluations laissées par les clients précédents.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">
              <FaUserTie />
            </div>
            <h3>Service Rapide</h3>
            <p>
              Trouvez une aide qualifiée rapidement selon votre besoin.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Prêt à commencer ?</h2>
        <p>Rejoignez des milliers d'utilisateurs satisfaits</p>

        <div className="cta-buttons">
          <Link to="/register-worker" className="cta-primary">
            Devenir un professionnel
          </Link>

          <Link to="/search" className="cta-secondary">
            Trouver un service
          </Link>
        </div>
      </section>
    </div>
  );
}