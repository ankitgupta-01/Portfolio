import React from "react";
import "./Projects.css";

const projectData = [
  {
    title: "Portfolio Website",
    desc: "A personal portfolio built with React and GSAP animations.",
    tech: ["React", "GSAP", "CSS"],
    link: "#",
  },
  {
    title: "Guest House Booking",
    desc: "Booking system with UI design and responsive layout.",
    tech: ["React.js", "Node.js", "Mongodb"],
    link: "#",
  },
//   {
//     title: "E-commerce UI",
//     desc: "Modern shopping UI with cart and product pages.",
//     tech: ["React", "Tailwind"],
//     link: "#",
//   },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <div className="tech">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <a href={project.link} target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;