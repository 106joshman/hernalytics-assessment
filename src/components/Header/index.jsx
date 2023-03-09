import React, { useState } from "react";
import BrandLogo from "../../assets/Logo.png";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const navLinks = [
    { id: 0, name: "about us", to: "/about" },
    { id: 1, name: "donate blood", to: "" },
  ];
  return (
    <div>
      <header className="p-6 lg:px-14 lg:py-10">
        <nav className="flex flex-row justify-between items-center">
          <div className="logo">
            <a href="">
              <img loading="lazy" src={BrandLogo} alt="Brand Logo" srcset="" />
            </a>
          </div>

          <div className="navLinks hidden lg:flex justify-between mx-2">
            <a href="#about" className="uppercase px-5 mx-2 text-sm text-white">
              about us
            </a>
            <a href="#about" className="uppercase px-5 mx-2 text-sm text-white">
              our communities
            </a>
            <a href="#about" className="uppercase px-5 mx-2 text-sm text-white">
              election data
            </a>
            <a href="#about" className="uppercase px-5 mx-2 text-sm text-white">
              e-buddy
            </a>
            <a href="#about" className="uppercase px-5 mx-2 text-sm text-white">
              veo platform
            </a>
          </div>
          <div className="hamburg lg:hidden">
            <Hamburger
              size={30}
              color="white"
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
          <div className="auth-bttn hidden items-center lg:flex">
            <a
              href="#about"
              className="uppercase text-base px-3 mx-2 text-white"
            >
              login
            </a>
            <a
              href="#about"
              className="uppercase text-base p-3 mx-2 bg-[#E5B805] rounded-md text-black"
            >
              sign up
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
