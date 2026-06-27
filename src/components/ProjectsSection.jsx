import React from "react";
import { projects, getProjectTeamLabel } from "./projectsData";
import "./ProjectsSection.css";

const ProjectsSection = ({ onNavigate, onPreviewVideo }) => {
  const handleNavigate = (route) => {
    onNavigate(route);
  };

  const handleCardKeyDown = (event, route) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleNavigate(route);
    }
  };

  const handleVideoClick = (event, project) => {
    event.preventDefault();
    event.stopPropagation();
    onPreviewVideo(project);
  };

  const handleReadMore = (event, route) => {
    event.preventDefault();
    event.stopPropagation();
    handleNavigate(route);
  };

  return (
    <section id="projects" className="projects-showcase">
      <div className="section-inner">
        <div className="projects-header">
          <p className="section-kicker">Project Showcase</p>
          <h2>Projects</h2>
          <p className="projects-intro">
            Open a project card to view the full build, architecture, dataset,
            and results for each team.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="project-card card"
              role="link"
              tabIndex={0}
              onClick={() => handleNavigate(project.route)}
              onKeyDown={(event) => handleCardKeyDown(event, project.route)}
            >
              <button
                type="button"
                className="project-card__media"
                aria-label={`Preview ${project.name} video`}
                onClick={(event) => handleVideoClick(event, project)}
              >
                <video
                  className="project-card__video"
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <span className="project-card__play" aria-hidden="true" />
              </button>

              <div className="project-card__body">
                <div className="project-card__heading">
                  <p className="project-card__team">
                    {getProjectTeamLabel(project)}
                  </p>
                  <h3>{project.name}</h3>
                </div>

                <button
                  type="button"
                  className="project-card__action"
                  onClick={(event) => handleReadMore(event, project.route)}
                >
                  Read more
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
