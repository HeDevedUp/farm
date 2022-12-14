import React, { useState, useEffect } from "react";
import {
  BsTwitter,
  BsInstagram,
  BsPinterest,
  BsLinkedin,
} from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  const getCurrentDate = dateState.toLocaleTimeString();

  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="footer-logo">
            <h2>DFARM AGRi </h2>
            <div className="footer-socials">
              <BsTwitter className="footer-socials-icon" />
              <BsInstagram className="footer-socials-icon" />
              <BsLinkedin className="footer-socials-icon" />
              <BsPinterest className="footer-socials-icon" />
              <FaTiktok className="footer-socials-icon" />
            </div>
          </div>
          <div className="footer-location">
            <h2>Contact </h2>
            <h3>Email</h3>
            <p>
            Dfarmagri@gmail.com
            </p>

            <h3>Phone</h3>
            <p>
            +234 908 022 4402
            </p>
          </div>
          <div className="footer-time">

          </div>
        </div>
        <div className="footer-end">
          <div className="footer--bottom__left">
            <p>&#169;2022. All rights reserved .DFARM AGRi </p>
          </div>
          <div className="footer--bottom__right">
            <p>
              Developed by{" "}
              <a
                href="https://twitter.com/devtochi"
                target="_blank"
                rel="noreferrer"
              >
                {""}devtochi
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
