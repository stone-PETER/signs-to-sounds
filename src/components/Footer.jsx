import React from "react";
import "./Footer.css";
const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      
      <div className="footer-links">
        <div className="contact section">
          <h4>Contact</h4>
          <p className="email">ieeespskerala@gmail.com</p>
          <div className="contact-person">
            <h5>Reesha Fathima</h5>
            <p>+91 70347 49249</p>
          </div>
          <div className="contact-person">
            <h5>Muhammed Basim P</h5>
            <p>+91 86061 20327</p>
          </div>
          <div className="contact-person">
            <h5>Deepak Santhosh</h5>
            <p>+91 94003 53443</p>
          </div>
        </div>
        <div className="sponsors section">
          <h4>Sponsors</h4>
        </div>
        <div className="social section">
          <h4>Socials</h4>
        </div>
      </div>
      <div className="footer-top">
        <p className="copyright">© 2025 Signs to Sounds. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
export default Footer;
