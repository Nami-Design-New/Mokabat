import OurTeam from "../components/about/OurTeam";
import WhyUs from "./../components/about/WhyUs";

export default function About() {
  return (
    <>
      <section className="about_page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12 p-2">
              <div className="content">
                <h1 data-aos="fade-up">Who We Are </h1>
                <p data-aos="fade-up">
                  ‘’Innovation is the main driver of advancement in this
                  world.’’ From this belief and out of the forward-thinking
                  nature of the need for digital innovation, mokabat was born.
                  mokabat is at the forefront of the digital revolution with
                  digital squads capable of rapidly prototyping, launching, and
                  scaling new products and businesses to serve fintechs,
                  government entities, smart cities, and other businesses in the
                  market.
                </p>
                <a data-aos="fade-up" href="" className="download_assets">
                  Download Company Brochure{" "}
                  <i className="fa-regular fa-cloud-arrow-down"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyUs />
      <OurTeam />
    </>
  );
}
