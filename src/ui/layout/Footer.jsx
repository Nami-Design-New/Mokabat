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
          <div className="col-12 p-2">
            <div className="copy_rights">
              <h6>
                <span>&copy; {new Date().getFullYear()}. </span>{" "}
                All Rights Reserved for <Link to="/">Mokabat</Link>
              </h6>
              <div className="links">
                <Link to="terms-conditions">Terms and Conditions</Link>
                <Link to="/contact-us">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
