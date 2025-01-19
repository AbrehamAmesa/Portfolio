import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function About() {
  const textRef = useRef();
  const [activeTab, setActiveTab] = useState("Skills");

  useEffect(() => {
    const text = [
      "I'm Abreham Amesa",
      "Software Developer",
      "UI Designer",
      "Passionate about tech and design.",
    ];

    // Dynamically split text into characters for animation
    textRef.current.innerHTML = text
      .map(
        (line) =>
          `<div class="line">${line
            .split("")
            .map((char) => `<span class="char">${char}</span>`)
            .join("")}</div>`
      )
      .join("");

    gsap.fromTo(
      ".char",
      { opacity: 0, x: -10 },
      {
        opacity: 1,
        x: 0,
        duration: 0.1,
        stagger: 0.05,
        repeat:20,
      }
    );
  }, []);

  // Content for each tab
  const tabContent = {
    Skills: (
      <ul className="list-unstyled">
        {["Node.js", "Express", "React", "JavaScript","MongoDB", "PHP", "Laravel"].map(
          (skill, index) => (
            <li key={index} className="mb-2">
              <i className="bi bi-check-circle-fill text-primary me-2"></i>
              {skill}
            </li>
          )
        )}
      </ul>
    ),
    Education: (
      <ul className="list-unstyled">
        <li>
          <strong>Bachelor's Degree in Information Systems</strong>
          <br />
          Wolkite University, 2019-2023
        </li>
        <li>
          <strong>High School Diploma</strong>
          <br />
          Gedo Secondary School
        </li>
      </ul>
    ),
    Certifications: (
      <ul className="list-unstyled">
        <li>
          <strong>React Developer Certification</strong> – Online Course
        </li>
        <li>
          <strong>Node.js Certification</strong> – Online Course
        </li>
        <li>
          <strong>UI/UX Design Training</strong> – Workshop
        </li>
      </ul>
    ),
  };

  return (
    <>
      <section id="about" className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img
                src="/images/profile.jpg"
                alt="Abreham Amesa"
                className="img-fluid rounded-circle shadow-lg"
                style={{ width: "320px", height: "330px" }}
              />
            </div>

            {/* Text Section with Typewriter Effect */}
            <div
              className="col-md-6"
              ref={textRef}
              style={{ fontSize: "32px", color: "pink" }}
            />
          </div>
        </div>

        {/* Main About Section */}
        <div className="container mt-5">
          <div className="row">
            {/* About Description */}
            <div className="col-md-8">
              <h2 className="text-primary mb-3">About Me</h2>
              <p className="lead text-style Italic">
                I am a dedicated and passionate software developer with a strong
                focus on building innovative and efficient solutions. With a solid
                foundation in modern web technologies, I enjoy creating
                applications that solve real-world problems and deliver great user
                experiences.
              </p>
              <p className="lead">
                I’m always eager to learn, grow, and collaborate on exciting
                projects that make a difference in the world.
              </p>

              {/* Download CV Button */}
              <div className="mt-4">
                <a
                  href="/docs/Abreham Amesa CV.pdf"
                  download="Abreham_Amesa_CV.pdf"
                  className="btn btn-primary btn-lg"
                >
                  <i className="bi bi-download me-2"></i>
                  Download CV
                </a>
              </div>
            </div>

            {/* Tabs and Content */}
            <div className="col-md-4">
              {/* Tab Navigation */}
              <div className="d-flex justify-content-center mb-4 tab-navigation">
                {["Skills", "Education", "Certifications"].map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(tab)}
                    className={`btn btn-link ${activeTab === tab ? "active-tab" : ""}`}
                    aria-pressed={activeTab === tab}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="tab-content mb-4 d-flex justify-content-center bg-dark">
                {tabContent[activeTab]}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
