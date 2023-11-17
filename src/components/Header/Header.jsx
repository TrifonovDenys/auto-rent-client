import React from "react";
import Navigation from "./Navigation/Navigation";
import { NavLink, Link } from "react-router-dom";
import LogoSvg from "./LogoSvg/LogoSvg";

const Header = () => {
  return (
    <>
      <div className="py-5 bg-[#f6fffe] border-b-[1px] border-[#3470FF]">
        <div className="w-[1200px] px-2 mx-auto my-0 flex justify-between items-center gap-2">
          <Link
            to="/"
            className="font-semibold leading-6 text-white hover:text-white flex items-center">
            <LogoSvg />
            <p style={{ marginLeft: "8px", color: "#3470FF" }}>AutoRent</p>
          </Link>

          <Navigation />
        </div>
      </div>
    </>
  );
};

export default Header;
