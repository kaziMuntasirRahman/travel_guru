import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Navbar = ({ showSearch, lightTheme }) => {
  const [navLinkColor, setNavLinkColor] = useState("black");
  const [logo, setLogo] = useState("logo.png");

  useEffect(() => {
    if (lightTheme) {
      setNavLinkColor("black");
      setLogo("logo.png");
    } else {
      setNavLinkColor("white");
      setLogo("logo-white.png");
    }

  }, []);

  return (
    <div className="navbar">
      <a href="/">
        <img src={logo} className="w-32" />

      </a>
      {
        showSearch &&
        <div className="form-control mx-auto flex relative text-base">
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white font-bold" />
          <input
          type="text"
          placeholder="Search your Destination..."
          className="!w-[370px] md:w-auto pl-10 py-3 bg-white/20 text-white font-semibold placeholder-white rounded-[5px] border outline-white" />
        </div>
      }

      <div
        className="flex items-center gap-[50px] text-base font-medium"
        style={{ color: `${navLinkColor}` }}>
        <NavLink>News</NavLink>
        <NavLink>Destination</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>Contact</NavLink>
        <button
          className="btn text-black px-7 py-3 bg-[#f9a51a] rounded-[5px] border-none">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;