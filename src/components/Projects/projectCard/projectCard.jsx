import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

const ProjectCard = ({ data }) => {
  return (
    <div className="project-card">
      <img
        src={data?.bgImg}
        alt="project"
        className="project-card--project-image"
      />
      <div className="project-card-layer">
        <div className="project-card-layer--top-content">
          <MarkdownPreview
            source={data?.desc}
            style={{ background: "transparent", color: "white" }}
          />
        </div>
        <div className="project-card-layer--bottom-content">
          <h2 className="project-card-layer--bottom-content--project-title">
            {data?.title}
          </h2>
          <div className="project-card-layer--bottom-content--tech-used-container">
            {data?.techUsed?.map((item) => (
              <span className="project-card-layer--bottom-content--tech-used-container--tech">
                {item}
              </span>
            ))}
          </div>
          <div className="project-card-layer--bottom-content--btn-container">
            <a
              href={data?.liveUrl}
              className="live"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
            <a
              href={data?.githubUrl}
              className="github"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
