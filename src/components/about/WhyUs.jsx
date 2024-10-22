import { useEffect } from "react";
import lozad from "lozad";
import SimpleParallax from "simple-parallax-js";

export default function WhyUs() {
  useEffect(() => {
    const observer = lozad(".lazy", {
      loaded: function (el) {
        el.parentNode.classList.add("loaded");
      },
    });
    observer.observe();
  }, []);

  return (
    <section className="whyus_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <div className="lazyImg">
              <div className="lazyDiv">
                <div className="lazy">
                  <SimpleParallax speed={0.5} scale={1.2}>
                    <img src="/images/about1.jpg" alt="our_aim" />
                  </SimpleParallax>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
