import React from "react";
import Title from "../../../components/Title/Title";
import Container from "../../../components/Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Navigation } from "swiper";
import "swiper/css/navigation";

function Testimonials() {
  return (
    <Container>
      <div className="my-24">
        <Title
          heading={"What Our Patients Says"}
          subHeading={
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          }
        />
        <div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, FreeMode]}
            spaceBetween={50}
            slidesPerView={2}
            freeMode={true}
            navigation
            loop
          >
            <SwiperSlide>
              
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </Container>
  );
}

export default Testimonials;
