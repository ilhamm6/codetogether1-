import React, { useMemo, useState } from "react";
import "./Booking.css";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaDollarSign,
  FaCommentDots,
  FaCalendarAlt,
  FaClock,
  FaCheck,
} from "react-icons/fa";

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(10);
  const [selectedHour, setSelectedHour] = useState("09:00");
  const [serviceType, setServiceType] = useState("");
  const [address, setAddress] = useState("");
  const [duration, setDuration] = useState(1);
  const [notes, setNotes] = useState("");

  const worker = {
    name: "Ahmed Bennani",
    job: "Électricien",
    city: "Casablanca",
    rating: 4.8,
    reviews: 120,
    priceMin: 200,
    priceMax: 400,
    priceHourly: 300,
    verified: true,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  };

  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  const total = useMemo(() => {
    return worker.priceHourly * Number(duration);
  }, [duration, worker.priceHourly]);

  return (
    <div className="booking-page">
      <div className="booking-topbar">
        <div className="booking-topbar-content">
          <Link to="/" className="back-link">
            <FaArrowLeft /> Retour
          </Link>
          <h1>Réservation</h1>
        </div>
      </div>

      <div className="booking-container">
        {/* LEFT CARD */}
        <div className="worker-card">
          <img src={worker.image} alt="" className="worker-image" />

          <h3 className="worker-name">
            {worker.name} {worker.verified && <span className="verified-dot">✓</span>}
          </h3>

          <p className="worker-job">{worker.job}</p>

          <div className="worker-info-box">
            <span>⭐</span>
            <span>
              {worker.rating} <small>({worker.reviews} avis)</small>
            </span>
          </div>

          <div className="worker-info-box">
            <span><FaMapMarkerAlt /></span>
            <span>{worker.city}</span>
          </div>

          <div className="worker-info-box">
            <span><FaDollarSign /></span>
            <span>
              {worker.priceMin}-{worker.priceMax} DH/h
            </span>
          </div>

          <button className="contact-btn">
            <FaCommentDots /> Contacter
          </button>
        </div>

        {/* RIGHT FORM */}
        <div className="booking-form-card">
          <h2>Détails de la réservation</h2>

          <div className="form-group">
            <label>
              <FaCalendarAlt /> Sélectionner une date *
            </label>

            <div className="calendar-box">
              <div className="calendar-header">
                <button type="button">‹</button>
                <span>April 2026</span>
                <button type="button">›</button>
              </div>

              <div className="calendar-days-head">
                <span>Su</span>
                <span>Ma</span>
                <span>Me</span>
                <span>Je</span>
                <span>Ve</span>
                <span>Sa</span>
                <span>Di</span>
              </div>

              <div className="calendar-grid">
                {days.map((day) => (
                  <button
                    key={day}
                    type="button"
                    className={selectedDate === day ? "calendar-day active-day" : "calendar-day"}
                    onClick={() => setSelectedDate(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <p className="selected-date-text">
                Date sélectionnée: vendredi {selectedDate} avril 2026
              </p>
            </div>
          </div>

          <div className="form-group">
            <label>
              <FaClock /> Heure de rendez-vous *
            </label>
            <select value={selectedHour} onChange={(e) => setSelectedHour(e.target.value)}>
              <option>09:00</option>
              <option>10:00</option>
              <option>11:00</option>
              <option>14:00</option>
              <option>15:00</option>
              <option>16:00</option>
            </select>
          </div>

          <div className="form-group">
            <label>Type de service *</label>
            <select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
              <option value="">Sélectionner un service</option>
              <option value="Installation">Installation</option>
              <option value="Réparation">Réparation</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Diagnostic">Diagnostic</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              <FaMapMarkerAlt /> Adresse d'intervention *
            </label>
            <input
              type="text"
              placeholder="Entrez votre adresse complète"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Durée estimée (heures)</label>
            <div className="range-line">
              <input
                type="range"
                min="1"
                max="8"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
              <span>{duration}h</span>
            </div>
          </div>

          <div className="form-group">
            <label>Description / Notes</label>
            <textarea
              placeholder="Décrivez en détail votre besoin, le problème rencontré, ou toute information utile pour le professionnel."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
            <p className="helper-text">
              Plus vous donnez de détails, mieux le professionnel pourra préparer son intervention.
            </p>
          </div>

          <div className="price-summary">
            <h3>Récapitulatif du prix</h3>

            <div className="summary-row">
              <span>Tarif horaire moyen</span>
              <span>{worker.priceHourly} DH/h</span>
            </div>

            <div className="summary-row">
              <span>Durée estimée</span>
              <span>{duration}h</span>
            </div>

            <div className="summary-total">
              <div>
                <strong>Total estimé</strong>
                <p>* Prix indicatif basé sur la durée estimée. Le prix final sera confirmé par le professionnel.</p>
              </div>
              <span>{total} DH</span>
            </div>
          </div>

          <div className="booking-actions">
            <button className="cancel-btn">✕ Annuler</button>
            <button className="confirm-btn">
              <FaCheck /> Confirmer la réservation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}