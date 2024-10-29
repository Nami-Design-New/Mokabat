import { useState, useRef } from "react";
import { Accordion } from "react-bootstrap";

export default function Services() {
  const [activeKey, setActiveKey] = useState("0");
  const serviceSectionRef = useRef(null);

  const images = [
    "/images/digital-lab-new.webp",
    "/images/digital-studio.webp",
    "/images/digital-factory.webp",
    "/images/digital-platform-new.webp",
    "/images/digital-business.webp",
    "/images/digital-insight.webp",
  ];

  return (
    <section ref={serviceSectionRef} className="services_section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-12 p-2 mb-5">
            <div className="header">
              <h2>
                Our Services For Your <span>Tech Driven Future</span>
              </h2>
              <p>
                We offer custom solutions from start to finish, covering
                everything from ideation and design to development, testing,
                growth, and knowledge sharing.
              </p>
            </div>
          </div>

          <div className="col-lg-5 col-12 p-2">
            <div className="aboutImage">
              <img src={images[parseInt(activeKey)]} alt="Service Image" />
            </div>
          </div>

          <div className="col-lg-7 col-12 p-2">
            <Accordion
              activeKey={activeKey}
              onSelect={(key) => setActiveKey(key)}
            >
              {[
                {
                  title: "01  Lab",
                  body: "A hub for co-creating and evaluating new ideas, driving innovation through incubation, acceleration, and business modeling. It aims to deliver transformative solutions by providing expertise to solve market challenges.",
                },
                {
                  title: "02  Studio",
                  body: "Ideate on what is best for you. Learn to define your requirements, prototype, and get support to achieve your ideal UX/UI that you can test with customers.",
                },
                {
                  title: "03  Factory",
                  body: "Here we go! Just like in a factory, this is where the products are made. With our highly experienced talents and advanced tools, deliver best in class products, enabled through a new way of working.",
                },
                {
                  title: "04  Platform",
                  body: "Technical abstraction layer for seamless solution build and fintech Integration. A centerpiece that leverage our banking technology assets in standardized and integrated tools (APIs, Open Banking, BaaS, and Digital Core).",
                },
                {
                  title: "05  Business",
                  body: " Develop a clear and concise strategy to define and communicate your company’s unique selling points and create an effective commercialization strategy.",
                },
                {
                  title: "06  Insights",
                  body: "Take part in valuable conversations. Let’s get people talking about tech products & services including yours",
                },
              ].map((service, index) => (
                <Accordion.Item
                  eventKey={index.toString()}
                  key={index}
                  className={activeKey === index.toString() ? "active" : ""}
                >
                  <Accordion.Header>{service.title}</Accordion.Header>
                  <Accordion.Body>{service.body}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
