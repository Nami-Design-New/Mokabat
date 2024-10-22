import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-4">
            <div className="news_letter">
              <p>
                SUBSCRIBE TO OUR <span>NEWSLETTER</span>
              </p>
              <h3>Receive the latest news and updates</h3>
              <form>
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </form>
            </div>
          </div>
          <div className="col-lg-4 col-12 p-2">
            <Link to="/" className="logo">
              <img src="/images/logo.svg" alt="logo" />
              <span></span>
              <img src="/images/vision-2030-logo.webp" alt="vision" />
            </Link>
            <div className="social_media">
              <Link>
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link>
                <i className="fab fa-twitter"></i>
              </Link>
              <Link>
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link>
                <i className="fab fa-youtube"></i>
              </Link>
              <Link>
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-12 p-2">
            <h2 className="footer_title">Important Links</h2>
            <ul className="footer_links">
              <li>
                <Link className="footer_link" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="footer_link" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="footer_link" to="/programs">
                  Programs
                </Link>
              </li>
              <li>
                <Link className="footer_link" to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="footer_link" to="/media">
                  Media
                </Link>
              </li>
              <li>
                <Link className="footer_link" to="/careers">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="footer_link" to="/faqs">
                  FAQs
                </Link>
              </li>
              <li>
                <Link className="footer_link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-12 p-2">
            <h2 className="footer_title">Office</h2>
            <Link
              target="_blank"
              rel="noreferrer"
              className="footer_link"
              to="https://maps.app.goo.gl/gNd6HKnUq1K8Jp1U6"
            >
              <i className="fas fa-map-marker-alt"></i>{" "}
              <span>
                Al-Amin Abdullah Al-Ali Al-Naeem Street, Al-Malaz, Riyadh 12836,
                Kingdom of Saudi Arabia
              </span>
            </Link>
            <Link to="mailto:info@mokabat.com" className="footer_link">
              <i className="fas fa-envelope"></i> <span>info@mokabat.com</span>
            </Link>
            <Link to="tel:+966 54 555 5555" className="footer_link">
              <i className="fas fa-phone"></i> <span>+966 54 555 5555</span>
            </Link>
          </div>

          <div className="col-12 p-2">
            <div className="copy_rights">
              <h6>
                <span>&copy; {new Date().getFullYear()}. </span> All Rights
                Reserved for <Link to="/">Mokabat</Link>
              </h6>
              <div className="links">
                <Link to="terms-conditions">Terms & Conditions</Link>
                <Link to="privacy-policy">Privacy & Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
