import React from "react";
import "./ProfileCard.css";
import { FaEnvelope } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { IoIosText } from "react-icons/io";



function ProfileCard() {
  return (
    <div className="card">

      <div className="header">
        <div className="avatar"><RxAvatar /></div>
        <h2>Sarah Johnson</h2>
        <p className="status">
          <span className="dot"></span> Online</p>
      </div>

      <div className="info">

        <h3>Contact Information</h3>

        <div className="item">
          <span className="icon"><MdLocalPhone />

          </span>
          <div>
            <p className="label">Phone</p>
            <p>+212 711223344</p>
          </div>
        </div>

        <div className="item">
          <span className="icon"><FaEnvelope/></span>
          <div>
            <p className="label">Email</p>
            <p>sarah.johnson@email.com</p>
          </div>
        </div>

        <button className="btn">
          <span className="text"><IoIosText /></span>
          Start Conversation
        </button>

      </div>

    </div>
  );
}

export default ProfileCard;