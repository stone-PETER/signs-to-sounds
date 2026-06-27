import React from "react";
import { getProjectTeamLabel } from "./projectsData";
import "./ProjectDetailPage.css";

const renderParagraphs = (items) =>
  items.map((paragraph) => <p key={paragraph}>{paragraph}</p>);

const ProjectDetailPage = ({ project, onNavigate, onPreviewVideo }) => {
  const handleNavigate = (event, route) => {
    event.preventDefault();
    onNavigate(route);
  };

  const handleVideoPreview = (event) => {
    event.preventDefault();
    onPreviewVideo(project);
  };

  return (
    <div className="project-page">
      <div className="project-page__topbar">
        <div className="section-inner">
          <a
            href="/#projects"
            className="project-back"
            onClick={(event) => handleNavigate(event, "/#projects")}
          >
            Back to Projects
          </a>
        </div>
      </div>

      <section className="project-hero">
        <div className="section-inner project-hero__grid">
          <div className="project-hero__copy">
            <p className="section-kicker">{project.category}</p>
            <h1>{project.name}</h1>
            <p className="project-hero__tagline">{project.tagline}</p>

            <div className="project-hero__meta">
              <div>
                <span className="project-hero__meta-label">Team</span>
                <span className="project-hero__meta-value">
                  {project.teamName || getProjectTeamLabel(project)}
                </span>
              </div>
              {project.teamLead && (
                <div>
                  <span className="project-hero__meta-label">Lead</span>
                  <span className="project-hero__meta-value">
                    {project.teamLead}
                  </span>
                </div>
              )}
              {project.cardFacts?.[0] && (
                <div>
                  <span className="project-hero__meta-label">Focus</span>
                  <span className="project-hero__meta-value">
                    {project.cardFacts[0]}
                  </span>
                </div>
              )}
            </div>

            <div className="project-hero__chips">
              {project.cardFacts?.map((fact) => (
                <span className="project-chip" key={fact}>
                  {fact}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="project-hero__media"
            aria-label={`Preview ${project.name} video`}
            onClick={handleVideoPreview}
          >
            <video
              className="project-hero__video"
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              preload="metadata"
            />
            <span className="project-hero__play" aria-hidden="true" />
          </button>
        </div>
      </section>

      <section className="project-sections">
        <div className="section-inner project-shell">
          <div className="project-shell__main">
            <article className="project-block">
              <h2>Overview</h2>
              {renderParagraphs(project.overview)}
            </article>

            {project.features?.length > 0 && (
              <article className="project-block">
                <h2>Key Features</h2>
                <ul className="project-list">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            )}

            {project.techStack?.length > 0 && (
              <article className="project-block">
                <h2>Tech Stack / Architecture</h2>
                {project.pipeline && (
                  <p className="project-pipeline">{project.pipeline}</p>
                )}
                <div className="project-tech-grid">
                  {project.techStack.map((group) => (
                    <section className="project-tech-group" key={group.title}>
                      <h3>{group.title}</h3>
                      <ul className="project-list compact">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </article>
            )}

            {project.dataset?.length > 0 && (
              <article className="project-block">
                <h2>Dataset & Training</h2>
                <ul className="project-list">
                  {project.dataset.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            )}

            {(project.results?.length > 0 || project.tables?.length > 0) && (
              <article className="project-block">
                <h2>Results / Performance</h2>
                {project.results?.length > 0 && (
                  <ul className="project-list">
                    {project.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                )}

                {project.tables?.map((table) => (
                  <div className="project-table-block" key={table.title}>
                    <h3>{table.title}</h3>
                    <div className="project-table-wrap">
                      <table className="project-table">
                        <thead>
                          <tr>
                            {table.columns.map((column) => (
                              <th key={column}>{column}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {table.rows.map((row) => (
                            <tr key={row.join("|")}>
                              {row.map((cell) => (
                                <td key={cell}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </article>
            )}
          </div>

          <aside className="project-shell__aside">
            {(project.teamName || project.teamLead || project.institute || project.teamMembers?.length > 0) && (
              <article className="project-block project-block--accent">
                <h2>Team</h2>
                <ul className="project-list">
                  {project.teamName && <li>Team name: {project.teamName}</li>}
                  {project.teamLead && <li>Team lead: {project.teamLead}</li>}
                  {project.institute && <li>Institute: {project.institute}</li>}
                  {project.teamMembers?.map((member) => (
                    <li key={member}>{member}</li>
                  ))}
                </ul>
              </article>
            )}

            {project.applications?.length > 0 && (
              <article className="project-block project-block--accent">
                <h2>Applications / Impact</h2>
                <ul className="project-list">
                  {project.applications.map((application) => (
                    <li key={application}>{application}</li>
                  ))}
                </ul>
              </article>
            )}

            {project.limitations?.length > 0 && (
              <article className="project-block project-block--accent">
                <h2>Known Limitations</h2>
                <ul className="project-list">
                  {project.limitations.map((limitation) => (
                    <li key={limitation}>{limitation}</li>
                  ))}
                </ul>
              </article>
            )}

            {project.futureWork?.length > 0 && (
              <article className="project-block project-block--accent">
                <h2>Future Work</h2>
                <ul className="project-list">
                  {project.futureWork.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            )}

            {project.links?.length > 0 && (
              <article className="project-block project-block--accent">
                <h2>Links</h2>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      className="project-link"
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            )}
          </aside>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
