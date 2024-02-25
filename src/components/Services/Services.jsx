import React, { useEffect, useState } from "react";
import { servicesCardData } from "./constants/constants";
import { ServicesCard } from "./servicesCard/servicesCard.component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useMedia } from "../../commons/useMedia/useMedia.common";

const Services = () => {
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
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          <Swiper
            slidesPerView={slidesToShow}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={media?.md || media?.sm ? false : true}
            modules={[Pagination, Navigation]}
            className="services-swiper"
          >
            {servicesCardData.map((item) => (
              <SwiperSlide key={item?.id}>
                <ServicesCard data={item} key={item?.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Services;
