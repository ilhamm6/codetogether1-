import { useState } from "react";
import "./search.css";
import professionalsData from "../../professionals.json";
import { Link } from "react-router-dom";

export default function Search() {
  const [query, setQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("Toutes les villes");
  const [selectedService, setSelectedService] = useState("Tous les services");
  const [rating, setRating] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [availableNow, setAvailableNow] = useState(false);
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const professionals = professionalsData;

  const filtered = professionals.filter((p) => {
    const matchQuery =
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.job.toLowerCase().includes(query.toLowerCase()) ||
      p.city.toLowerCase().includes(query.toLowerCase());

    const matchCity =
      selectedCity === "Toutes les villes" || p.city === selectedCity;

    const matchService =
      selectedService === "Tous les services" || p.job === selectedService;

    const matchRating = p.rating >= rating;
    const matchPrice = p.priceMin <= maxPrice;
    const matchAvailable = !availableNow || p.available;
    const matchVerified = !verifiedOnly || p.verified;

    return (
      matchQuery &&
      matchCity &&
      matchService &&
      matchRating &&
      matchPrice &&
      matchAvailable &&
      matchVerified
    );
  });

  return (
    <div className="search-page">
      <div className="search-hero">
        <h2>Trouver un professionnel</h2>

        <div className="search-container">
          <input
            type="text"
            placeholder="Chercher un professionnel"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option>Toutes les villes</option>
            <option>Casablanca</option>
            <option>Rabat</option>
            <option>Marrakech</option>
            <option>Fès</option>
            <option>Taza</option>
            <option>Meknès</option>
          </select>

          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option>Tous les services</option>
            <option>Plombier</option>
            <option>Électricien</option>
            <option>Mécanicien</option>
            <option>Jardinier</option>
            <option>Technicien</option>
          </select>

          <button className="search-btn">Trouver</button>
        </div>
      </div>

      <div className="content">
        <div className="filters">
          <h4>Filtres</h4>

          <p className="filter-title">Note minimale</p>

          <div className="rating-list">
            {[5, 4, 3, 2, 1].map((r) => (
              <button
                key={r}
                className={`rating-btn ${rating === r ? "active-rating" : ""}`}
                onClick={() => setRating(r)}
              >
                {r}+ étoiles
              </button>
            ))}
          </div>

          <label className="check-item">
            <input
              type="checkbox"
              checked={verifiedOnly}
              onChange={(e) => setVerifiedOnly(e.target.checked)}
            />
            <span>✔ Vérifiés uniquement</span>
          </label>

          <label className="check-item">
            <input
              type="checkbox"
              checked={availableNow}
              onChange={(e) => setAvailableNow(e.target.checked)}
            />
            <span>Disponible aujourd’hui</span>
          </label>

          <p className="price-title">Fourchette de prix</p>

          <input
            className="price-range"
            type="range"
            min="0"
            max="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />

          <p className="price-values">0 DH - {maxPrice} DH</p>
        </div>

        <div className="results-section">
          <p className="results-count">
            {filtered.length} professionnels trouvés
          </p>

          <div className="results">
            {filtered.map((p) => (
              <div className="pro-card" key={p.id}>
                <div className="pro-top">
                  <img src={p.image} alt={p.name} className="profile" />

                  <div className="pro-info">
                    <div className="name-row">
                      <h3>{p.name}</h3>
                      {p.verified && (
                        <span className="verified">✓ Vérifié</span>
                      )}
                    </div>

                    <p className="job">{p.job}</p>
                    <p className="line">⭐ {p.rating} ({p.reviews} avis)</p>
                    <p className="line">📍 {p.city}</p>
                    <p className="line">💰 {p.priceMin}-{p.priceMax} DH</p>
                  </div>
                </div>

                <div className="pro-actions">
                  <Link
                    to="/booking"
                    state={{ worker: p }}
                    className="pro-reserve-btn link-btn"
                  >
                    Réserver
                  </Link>

                  <Link
                    to="/contact"
                    state={{ worker: p }}
                    className="pro-contact-btn"
                  >
                    💬
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}