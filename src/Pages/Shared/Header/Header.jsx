import React, { useEffect, useState } from "react";
import logo from "../../../assets/header/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [scrollBackground, setScrollBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const shouldAddBackground = scrollPosition > 0;
      setScrollBackground(shouldAddBackground);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigation = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );
  return (
    <div className={`fixed py-2 navbar px-40 z-10 top-0 left-0  ${
        scrollBackground ? 'bg-teal-950/90' : ''
      }`}
>
      <div className="flex-1 gap-3">
        <img src={logo} alt="" />
        <h2 className="text-2xl font-semibold text-white">
          <span className="text-orange-300">Doc</span> House
        </h2>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-white">{navigation}</ul>
      </div>
    </div>
  );
}

export default Header;
