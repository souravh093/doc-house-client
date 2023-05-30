import React from "react";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import ContactDetails from "./ContactDetails/ContactDetails";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <ContactDetails />
      <Testimonials />
    </>
  );
};

export default Home;
