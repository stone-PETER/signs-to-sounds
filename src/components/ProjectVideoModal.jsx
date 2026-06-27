import { useEffect } from "react";
import "./ProjectVideoModal.css";

const ProjectVideoModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  return (
    <div className="video-modal" role="presentation" onClick={onClose}>
      <div
        className="video-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} video preview`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="video-modal__close"
          aria-label="Close video preview"
          onClick={onClose}
        >
          ×
        </button>
        <div className="video-modal__frame">
          <video
            key={project.video}
            className="video-modal__video"
            src={project.video}
            autoPlay
            muted
            controls
            playsInline
          />
        </div>
        <div className="video-modal__meta">
          <p className="video-modal__team">Team</p>
          <h3>{project.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectVideoModal;
