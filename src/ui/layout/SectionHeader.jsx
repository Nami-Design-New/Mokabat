// import { Fragment } from "react";
// import { Link } from "react-router-dom";

export default function SectionHeader({ title }) {
  const location = window.location.pathname.split("/").filter(Boolean);

  // const createBreadcrumbPath = (index) => {
  //   return "/" + location.slice(0, index + 1).join("/");
  // };

  return (
    <section className="sectionHeader">
      <div className="container h-100">
        <div className="page">
          {/* <div className="links">
            <Link to="/">Home</Link>

            {location.length > 0 && (
              <span>
                <i className="fa-regular fa-angle-right"></i>
              </span>
            )}

            {location.map((item, index) => (
              <Fragment key={index}>
                <Link to={createBreadcrumbPath(index)}>
                  {item?.split("-").join(" ")}
                </Link>
                {index < location.length - 1 && (
                  <span>
                    <i className="fa-regular fa-angle-right"></i>
                  </span>
                )}
              </Fragment>
            ))}
          </div> */}
          <h2>
            {title || location[location.length - 1]?.split("-").join(" ")}
          </h2>
        </div>
      </div>
    </section>
  );
}
