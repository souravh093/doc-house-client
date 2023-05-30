import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

function Title({ heading, subHeading }) {
  return (
    <div className="flex justify-center">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-5">{heading}</h2>
        <p className="text-lg max-w-4xl">{subHeading}</p>
      </div>
    </div>
  );
}

export default Title;
