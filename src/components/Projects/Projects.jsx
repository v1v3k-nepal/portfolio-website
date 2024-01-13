import React from "react";
import "./Projects.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { projectData } from "./constants/constants";
import ProjectCard from "./projectCard/projectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Projects = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Projects</h1>
        <div className="work-list">
          <Swiper
            slidesPerView={3}
            spaceBetween={50}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="projects-swiper"
          >
            {projectData.map((item) => (
              <SwiperSlide>
                <ProjectCard data={item} />
                {/* <div>Hello</div> */}
              </SwiperSlide>
            ))}
          </Swiper>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Projects;
