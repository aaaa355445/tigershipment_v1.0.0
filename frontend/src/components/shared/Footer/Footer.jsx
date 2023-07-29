import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const email = {
    color: "#FF9933",
    textDecoration: "none",
  };

  return (
    <footer className={styles.footerDesign}>
      <h1>Tiger Shipment</h1>

      <div className={styles.footerSections + " " + styles.container}>
        <div className={styles.section1}>
          <h3>About us</h3>
          <p>
            TigerShipment enables small & medium manufacturers in India to sell
            their products overseas.<br />  This is in line with the
            Indian govt's 'Make in India' initiative.
          </p>
        </div>
        <div className={styles.section2}>
          <h3>Legal</h3>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link>Terms of service</Link></li>
            <li><Link>FAQs</Link></li>
          </ul>
        </div>
        <div className={styles.section3}>
          <div className={styles.contact}>
            <h3>Contact us</h3>
            <Link style={email}>contact@tigershipment.com</Link>
          </div>
          <div className={styles.follow}>
            <h3>Follow us</h3>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          Copyright © 2023 TigerShipment | Enigmee Ventures. All right reserved.
        </p>
        <p>Made with ❤️ in India TigerShipment</p>
      </div>
    </footer>
  );
};

export default Footer;
