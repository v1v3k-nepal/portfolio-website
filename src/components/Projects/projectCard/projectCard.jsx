import React from "react";
import "./_projectCard.scss";
import MarkdownPreview from "@uiw/react-markdown-preview";

const ProjectCard = ({ data }) => {
  return (
    <div className="work">
      <img src={data?.bgImg} alt="" />
      <div className="layer bg4">
        <h2>{data?.title}</h2>
        <MarkdownPreview
          source={data?.desc}
          style={{ background: "transparent", color: "white" }}
        />
        <div className="btn-container">
          <a href={data?.liveUrl} className="live">
            Live
          </a>
          <a href={data?.githubUrl} className="github">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
