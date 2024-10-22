import { Link } from "react-router-dom";

export default function SectionHeader({ title }) {
  const location = window.location.pathname.split("/")[1];
  return (
    <section className="sectionHeader">
      <div className="container h-100">
        <div className="page">
          <div className="links">
            <Link to="/">Home</Link>
            <span>
              <i className="fa-regular fa-angle-right"></i>
            </span>
            <Link to={`/${location}`}>{location}</Link>
          </div>
          <h2>{title || location}</h2>
        </div>
      </div>
    </section>
  );
}
