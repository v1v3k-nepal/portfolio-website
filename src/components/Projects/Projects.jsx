import React, { useState, useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { projectData } from "./constants/constants";
import ProjectCard from "./projectCard/projectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useMedia } from "../../commons/useMedia/useMedia.common";

const Projects = () => {
  const media = useMedia();
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    media?.sm && setSlidesToShow(1);
    media?.md && setSlidesToShow(1);
    media?.lg && setSlidesToShow(2);
    media?.xlg && setSlidesToShow(2);
    media?.xxl && setSlidesToShow(3);
  }, [media]);
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Projects</h1>
        <div className="work-list">
          <Swiper
            slidesPerView={slidesToShow}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={media?.md || media?.sm ? false : true}
            modules={[Pagination, Navigation]}
            className="projects-swiper"
          >
            {projectData.map((item) => (
              <SwiperSlide key={item?.id}>
                <ProjectCard data={item} />
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
