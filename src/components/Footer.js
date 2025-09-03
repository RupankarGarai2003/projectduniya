// Footer.js
import "../styles/Footer.css";
import {
  FaYoutube,
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div id="about" className="footer-section about">
          <h2>ProjectDuniya</h2>
          <p>
            ProjectDuniya offers top-tier academic and technical services tailored
            for students and professionals.
          </p>
          <p>
            Reach out for personalized support, expert guidance, and
            project-based learning — anytime, anywhere.
          </p>
        </div>

        {/* WhatsApp CTA Section */}
        <div className="footer-section cta">
          <h2 className="cta-title">Need a Project Guide?</h2>
          <p className="cta-text">Talk to our experts and get started today.</p>
          <a
            href="https://wa.me/918391808784"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-whatsapp"
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        {/* Contact & Socials */}
        <div id="contact" className="footer-section contact">
          <h2>Contact Info</h2>
          <p><FaPhoneAlt /> +91 8391808784</p>
          <p><MdEmail /> rupankargarai55@gmail.com</p>
          <div className="social-icons">
            
            <a href="https://whatsapp.com/channel/0029Vb6IJCz1HspyfkinMl2g" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://t.me/projectduniya" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
            <a href="https://www.instagram.com/projectduniya.help?igsh=aGl6aDdtbzFmaHJs" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/profile.php?id=61580355323239" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          </div>
        </div>
      </div>

      <hr />

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="footer-credit">
          © 2025 <span className="highlight">ProjectDuniya</span> • Built for Students & Professionals with <span className="heart">❤️</span>
        </p>
        {/* <p className="privacy-link">
          <Link to="/privacy">Privacy Policy</Link>
        </p> */}
      </div>
    </footer>
  );
}
