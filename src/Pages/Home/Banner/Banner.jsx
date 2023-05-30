import React from "react";
import Container from "../../../components/Container/Container";
import bannerImg from "../../../assets/header/banner.png";

function Banner() {
  return (
    <div className="bg-teal-950 min-h-screen py-52">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-7xl text-white font-semibold max-w-2xl">
              Your Best Medical Help Center
            </h2>
            <p className="text-lg text-white max-w-2xl my-10">
              Lorem Ipsum is simply dummy text they are printing typesetting has
              been the industry’s stardard.
            </p>
            <button className="text-white bg-orange-300 py-4 px-10 text-2xl rounded-md hover:bg-orange-400">
              All Service
            </button>
          </div>
          <div>
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
