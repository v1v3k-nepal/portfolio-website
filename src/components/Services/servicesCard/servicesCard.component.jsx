import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

export const ServicesCard = ({ data }) => {
  return (
    <div className="services-card">
      {data?.icon}
      <h2>{data?.cardTitle}</h2>
      <p className="services-card-desc">{data?.desc}</p>
      <div className="services-card-learn-more">
        <div className="learn-more-container">
          <a href={data?.url} className="learn-more-container--title">
            Learn More
          </a>

          <div className="learn-more-container--arrow-forward">
            <IoMdArrowRoundForward />
          </div>
        </div>
      </div>
    </div>
  );
};
