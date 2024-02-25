import React from "react";
import { MdArrowForward } from "react-icons/md";

const LearnMore = ({ url }) => {
  return (
    <div className="learn-more-container">
      <a href={url} className="learn-more-container--title">
        Learn More
      </a>

      <div className="learn-more-container--arrow-forward">
        <MdArrowForward />
      </div>
    </div>
  );
};

export default LearnMore;
