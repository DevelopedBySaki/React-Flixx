import "../css/style.css";
import "../lib/fontawesome.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="logo">
          <span>FLIXX</span>
        </div>
        <div className="social-links">
          <a
            href="https://www.facebook.com"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
