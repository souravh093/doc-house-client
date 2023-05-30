import React from "react";
import Container from "../../../components/Container/Container";
import { FiClock } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

function ContactDetails() {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-10">
        <div className="flex gap-5 rounded-lg bg-lime-950 text-white py-16 px-10">
          <div className="text-6xl">
            <FiClock />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-semibold">Opening Hours</h2>
            <p className="text-lg max-w-[200px]">
              Open 9.00 am to 5.00pm Everyday
            </p>
          </div>
        </div>
        <div className="flex gap-5 rounded-lg bg-orange-300 text-white py-16 px-10">
          <div className="text-6xl">
            <CiLocationOn />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-semibold">Our Locations</h2>
            <p className="text-lg max-w-[200px]">
              Dhanmondi 17, Dhaka -1200, Bangladesh
            </p>
          </div>
        </div>
        <div className="flex gap-5 rounded-lg bg-lime-950 text-white py-16 px-10">
          <div className="text-6xl">
            <BsFillTelephoneOutboundFill />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-semibold">Contact Us</h2>
            <p className="text-lg max-w-[200px]">
              +88 01750 00 00 00 <br />
              +88 01750 00 00 00
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ContactDetails;
