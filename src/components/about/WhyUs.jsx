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
                  <SimpleParallax>
                    <img src="/images/border-animation.jpg" alt="our_aim" />
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
