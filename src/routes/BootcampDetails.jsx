import { useState } from "react";

export default function BootcampDetails() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="bootcamp_details">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <div className="content">
              <h3>TekTalk</h3>
              <p>
                A series of exclusive sessions focusing on cutting-edge tech
                topics. We’ll delve into crucial areas like ChatGPT, AI, the
                metaverse, and other fintech-related technologies. Our goal is
                to empower and expand your knowledge, broaden your perspectives,
                and stimulate your creativity.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <div className="img">
              <img src="/images/tektalk_outer_image.webp" alt="" />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 p-2 mt-5">
            <div className="header">
              <h2>
                Program <span>Goals</span>
              </h2>
              <p>
                TEK TALK sessions bring updated knowledge, skill growth, and
                innovation. They boost engagement, spark collaboration, enhance
                competitiveness, and foster an adaptable culture for future
                readiness.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <div className="goal_card">
              <h2>Diverse Tech Sessions</h2>
              <p>
                Exclusive sessions on AI, the metaverse, fintech, and more,
                tailored for both JEEL and Riyad Bank staff as well as their
                respective audiences.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <div className="goal_card">
              <h2>Knowledge and Skill Enhancement</h2>
              <p>
                These sessions provide updated knowledge, skill growth, and
                innovation opportunities.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <div className="goal_card">
              <h2>Collaborative Environment</h2>
              <p>
                They encourage engagement, spark collaboration, and enhance
                competitiveness among participants.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <div className="goal_card">
              <h2>Future-Ready Culture</h2>
              <p>
                These sessions foster adaptability, cultivating a culture
                prepared for future technological advancements.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-12 p-2">
            <div className="header">
              <h2>Sessions</h2>
            </div>
          </div>
          <div className="col-lg-8 col-12 p-2">
            <div className="tabs">
              <button
                onClick={() => setActiveTab(1)}
                className={activeTab === 1 ? "active" : ""}
              >
                Upcoming Sessions
              </button>
              <button
                onClick={() => setActiveTab(0)}
                className={activeTab === 0 ? "active" : ""}
              >
                What You Missed
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-4 col-12 p-2">
            <div className="session_card">
              <div className="img">
                <img src="/images/tektalk_outer_image.webp" alt="" />
                <div className="content">
                  <span>Session 1</span>
                  <h2>Chat GPT</h2>
                  <p>
                    This session led to the TekTalk debut, delving into
                    ChatGPT’s potential in banking. Attendees discovered its
                    diverse applications, from personalized marketing to
                    financial advice, setting the stage for future innovation
                    discussions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 p-2">
            <div className="session_card">
              <div className="img">
                <img src="/images/tektalk_outer_image.webp" alt="" />
                <div className="content">
                  <span>Session 1</span>
                  <h2>Chat GPT</h2>
                  <p>
                    This session led to the TekTalk debut, delving into
                    ChatGPT’s potential in banking. Attendees discovered its
                    diverse applications, from personalized marketing to
                    financial advice, setting the stage for future innovation
                    discussions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 p-2">
            <div className="session_card">
              <div className="img">
                <img src="/images/tektalk_outer_image.webp" alt="" />
                <div className="content">
                  <span>Session 1</span>
                  <h2>Chat GPT</h2>
                  <p>
                    This session led to the TekTalk debut, delving into
                    ChatGPT’s potential in banking. Attendees discovered its
                    diverse applications, from personalized marketing to
                    financial advice, setting the stage for future innovation
                    discussions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
