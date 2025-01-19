import React, { useState } from "react";

function Projects() {
  const [activeTab, setActiveTab] = useState("Web");

  // Projects data categorized by type
  const projects = {
    Web: [
      {
        title: "Chat App",
        description: "Real-time chat application built with MERN stack.",
        image: "images/chatapp.png",
        link: "https://github.com/AbrehamAmesa/RealTime-Chat-By-MERN",
      },
      {
        title: "Task Management",
        description: "Sample To do task registration by Laravel",
        image: "images/taskapp.png",
        link: "https://github.com/AbrehamAmesa/Laravel-Task-Management",
      },
      {
        title: "Portfolio",
        description: "Portfolio By React",
        image: "images/coming.png",
        link: "https://github.com/AbrehamAmesa/Portfolio",
      },
    ],
    Mobile: [
      {
        title: "Mobile Project 1",
        description: "Description of the mobile project.",
        image: "images/coming.png",
        link: "https://github.com/your-profile/mobile-project-1",
      },
      {
        title: "Mobile Project 2",
        description: "Description of another mobile project.",
        image: "images/coming.png",
        link: "https://github.com/your-profile/mobile-project-2",
      },
    ],
    Desktop: [
      {
        title: "Desktop Project 1",
        description: "Description of the desktop project.",
        image: "images/coming.png",
        link: "https://github.com/your-profile/desktop-project-1",
      },
    ],
  };

  return (
    <section className="container py-5 bg-dark text-light" id="projects">
      <h2 className="text-primary text-center mb-4">My Projects</h2>

      {/* Tabs Navigation */}
      <ul className="nav nav-tabs justify-content-center mb-4">
        {["Web", "Mobile", "Desktop"].map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
              style={{
                backgroundColor: activeTab === tab ? "#007bff" : "transparent",
                color: activeTab === tab ? "white" : "#fff",
              }}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* Projects for the Active Tab */}
      <div className="row">
        {projects[activeTab].map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card bg-secondary text-light h-100">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.link}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
