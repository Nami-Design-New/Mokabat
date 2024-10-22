import { useState } from "react";
import { Accordion } from "react-bootstrap";

export default function Services() {
  const [activeKey, setActiveKey] = useState("0");

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <section className="services_section">
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
              <img src="/images/border-animation.jpg" alt="" />
            </div>
          </div>

          <div className="col-lg-7 col-12 p-2">
            <Accordion activeKey={activeKey} onSelect={handleToggle}>
              <Accordion.Item
                eventKey="0"
                className={activeKey === "0" ? "active" : ""}
              >
                <Accordion.Header onClick={() => handleToggle("0")}>
                  01 &nbsp; &nbsp; Lab
                </Accordion.Header>
                <Accordion.Body>
                  A hub for co-creating and evaluating new ideas, driving
                  innovation through incubation, acceleration, and business
                  modeling. It aims to deliver transformative solutions by
                  providing expertise to solve market challenges.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="1"
                className={activeKey === "1" ? "active" : ""}
              >
                <Accordion.Header onClick={() => handleToggle("1")}>
                  02 &nbsp; &nbsp; Studio
                </Accordion.Header>
                <Accordion.Body>
                  Ideate on what is best for you. Learn to define your
                  requirements, prototype, and get support to achieve your ideal
                  UX/UI that you can test with customers.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="3"
                className={activeKey === "3" ? "active" : ""}
              >
                <Accordion.Header onClick={() => handleToggle("3")}>
                  03 &nbsp; &nbsp; Factory
                </Accordion.Header>
                <Accordion.Body>
                  Here we go! Just like in a factory, this is where the products
                  are made. With our highly experienced talents and advanced
                  tools, deliver best in class products, enabled through a new
                  way of working.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="4"
                className={activeKey === "4" ? "active" : ""}
              >
                <Accordion.Header onClick={() => handleToggle("4")}>
                  04 &nbsp; &nbsp; Platform
                </Accordion.Header>
                <Accordion.Body>
                  Technical abstraction layer for seamless solution build and
                  fintech Integration. A centerpiece that leverage our banking
                  technology assets in standardized and integrated tools (APIs,
                  Open Banking, BaaS, and Digital Core)
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="5"
                className={activeKey === "5" ? "active" : ""}
              >
                <Accordion.Header onClick={() => handleToggle("5")}>
                  05 &nbsp; &nbsp; Business
                </Accordion.Header>
                <Accordion.Body>
                  Develop a clear and concise strategy to define and communicate
                  your company’s unique selling points and create an effective
                  commercialization strategy.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="6"
                className={activeKey === "6" ? "active" : ""}
              >
                <Accordion.Header onClick={() => handleToggle("6")}>
                  06 &nbsp; &nbsp; Insights
                </Accordion.Header>
                <Accordion.Body>
                  Take part in valuable conversations. Let’s get people talking
                  about tech products & services including yours
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
