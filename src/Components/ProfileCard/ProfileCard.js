import React from "react";
import { Link } from "react-router-dom";
import "./ProfileCard.css";
import { FaStar, FaMapMarkerAlt, FaComment } from "react-icons/fa";

function ProfileCard({ name, job, rating, image, status, distance }) {
  const worker = {
    name,
    job,
    rating,
    image,
    status,
    distance,
  };

  return (
    <div className="profileCard">
      {/* IMAGE */}
      <div className="cardImage">
        <img src={image} alt={name} />

        <span className={`status ${status === "Disponible" ? "green" : "gray"}`}>
          {status}
        </span>
      </div>

      {/* INFO */}
      <div className="cardBody">
        <h3>{name}</h3>
        <p className="job">{job}</p>

        <div className="rating">
          <FaStar className="star" />
          <span>{rating}</span>
        </div>

        <div className="location">
          <FaMapMarkerAlt />
          <span>{distance}</span>
        </div>

        <Link
          className="contactBtn"
          to="/contact"
          state={{ worker }}
        >
          <FaComment /> Contacter
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;