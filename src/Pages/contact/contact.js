import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";
import "./contact.css";

function Contact() {
  const [message, setMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const worker = location.state?.worker;

  return (
    <div className="contact-page">
      <div className="contact-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>

        <div>
          <h2>Contact</h2>
          {worker ? (
            <>
              <h2>Contact</h2>
              <p>{worker.name} – {worker.job}</p>
            </>
          ) : (
            <>
              <h2>Contact Us</h2>
              <p>Send us a message and we will reply soon.</p>
            </>
          )}
        </div>
      </div>

      <div className="contact-box">
        <textarea
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="send-btn">
          <FaPaperPlane />
          <span>Send Message</span>
        </button>
      </div>
    </div>
  );
}

export default Contact;