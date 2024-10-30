import { Link } from "react-router-dom";

export default function Insight() {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "",
          text: "",
          url: window.location.href,
        })
        .catch((error) => ("Error sharing:", error));
    } else {
      alert("Your browser does not support the Web Share API");
    }
  };

  return (
    <section className="insight_page">
      <div className="details_top">
        <div className="img">
          <img src="/images/CBDC.jpg" alt="" />
          <div className="content">
            <h3>Transforming Finance and Banking</h3>
            <div className="btns">
              <button>
                Download files{" "}
                <i className="fa-regular fa-cloud-arrow-down"></i>
              </button>
              <button onClick={handleShare}>
                Share Insight <i className="fa-solid fa-share"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <p>
          <b>Strategies for Banks in a Digital Currency World</b>
        </p>
        <p>
          Central Bank Digital Currency (CBDC) is gaining traction worldwide as
          countries explore its potential benefits, including improved monetary
          policy design, enhanced financial accessibility, real-time payments,
          secure and non-commercial transactions, and reduced physical storage
          requirements. However, CBDC also presents risks like credential theft,
          misuse of power, double spending, data privacy concerns, and the need
          for cross-border interoperability. To adapt to this digital shift,
          banks must prepare by addressing revenue impacts, zero transaction
          charges, infrastructure setup, sandbox integration, CBDC wallet
          development, and robust cybersecurity.
        </p>
        <div className="row">
          <div className="col-12 p-2">
            <h2 className="header">
              Read <span>Next</span>
            </h2>
          </div>
          <div className="col-lg-4 col- md-6 col-12 p-2">
            <Link to="/insights/1" className="insight_link">
              <div className="img">
                <img src="/images/Digital-Innovation.jpg" alt="" />
                <div className="content">
                  <h4>Powering Innovation Capabilities</h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col- md-6 col-12 p-2">
            <Link to="/insights/1" className="insight_link">
              <div className="img">
                <img src="/images/ESG.jpg" alt="" />
                <div className="content">
                  <h4>Banking for a Better World</h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col- md-6 col-12 p-2">
            <Link to="/insights/1" className="insight_link">
              <div className="img">
                <img src="/images/Fintech-Banking.jpg" alt="" />
                <div className="content">
                  <h4>The Fintech Revolution</h4>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
