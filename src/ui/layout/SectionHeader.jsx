import { Link } from "react-router-dom";

export default function SectionHeader() {
  return (
    <section className="sectionHeader">
      <div className="container h-100">
        <div className="page">
          <div className="links">
            <Link to="/">Home</Link>
            <span>
              <i className="fa-regular fa-angle-right"></i>
            </span>
            <Link to="/about">About</Link>
          </div>
          <h2>About Mokabat</h2>
        </div>
      </div>
    </section>
  );
}
