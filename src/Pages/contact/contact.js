import React from "react";
import "./contact.css";
import { FaPhone, FaVideo, FaComment, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Contact() {
  const worker = {
    name: "Ahmed Bennani",
    job: "Électricien",
    rating: 4.8,
    reviews: 120,
    city: "Casablanca",
    price: "200-400 DH",
    phone: "+212600000000",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  };

  return (
    <div className="contact-page">
      <div className="contact-card">

        <img src={worker.image} alt="" className="contact-avatar" />

        <h2>{worker.name}</h2>
        <p className="verified">✔ Professionnel vérifié</p>
        <p className="job">{worker.job}</p>

        <div className="info-box">
          ⭐ {worker.rating} ({worker.reviews} avis)
        </div>

        <div className="info-box">
          <FaMapMarkerAlt/> {worker.city}
        </div>

        <div className="info-box">
          💰 {worker.price} par heure
        </div>

        <a href={`tel:${worker.phone}`} className="call-btn">
          <FaPhone/> Appeler maintenant
        </a>

        <button className="video-btn">
          <FaVideo/> Appel vidéo
        </button>

        <Link to="/chat" className="chat-btn">
          <FaComment/> Chat en direct
        </Link>

        <div className="contact-info">
          <h4>INFORMATIONS DE CONTACT</h4>

          <p>✔ Réponse sous 24h</p>
          <p>✔ Disponible en semaine</p>
          <p>✔ En ligne maintenant</p>
        </div>

      </div>
    </div>
  );
}