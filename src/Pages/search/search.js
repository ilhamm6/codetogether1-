import { useState } from "react";
import "./search.css";
import professionalsData from "./data/professionals.json";

export default function Search() {
  const [query, setQuery] = useState("");
  const [rating, setRating] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [availableNow, setAvailableNow] = useState(false);

  const professionals = professionalsData;

  const filtered = professionals.filter((p) => {
    return (
      p.name.toLowerCase().includes(query.toLowerCase()) &&
      p.rating >= rating &&
      p.priceMin <= maxPrice &&
      (!availableNow || p.available)
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

          <select>
            <option>Toutes les villes</option>
            <option>Casablanca</option>
            <option>Rabat</option>
            <option>Marrakech</option>
            <option>Taza</option>
            <option>Meknes</option>
          </select>

          <select>
            <option>Tous les services</option>
            <option>Plombier</option>
            <option>Electricien</option>
            <option>Jardinier</option>
          </select>

          <button className="search-btn">Trouver</button>
        </div>
      </div>

      <div className="content">
        <div className="filters">
          <h4>Filtres</h4>

          <p>Note minimale</p>
          {[5, 4, 3, 2, 1].map((r) => (
            <button key={r} onClick={() => setRating(r)}>
              {r}+ étoiles
            </button>
          ))}

          <label>
            <input
              type="checkbox"
              onChange={(e) => setAvailableNow(e.target.checked)}
            />
            Disponible aujourd’hui
          </label>

          <p>Fourchette de prix</p>
          <input
            type="range"
            min="0"
            max="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          <p>0 DH - {maxPrice} DH</p>
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
                    <p className="line">
                      💰 {p.priceMin}-{p.priceMax} DH
                    </p>
                  </div>
                </div>

                <div className="pro-actions">
                  <button className="reserve-btn">Réserver</button>
                  <button className="contact-btn">💬</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}