import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ showSearch, lightTheme, background, absolutePosition }) => {
  const [navLinkColor, setNavLinkColor] = useState("black");
  const [logo, setLogo] = useState("logo.png");
  const navigate = useNavigate();

  useEffect(() => {
    if (lightTheme) {
      setNavLinkColor("black");
      setLogo("/logo.png");
    } else {
      setNavLinkColor("white");
      setLogo("/logo-white.png");
    }

  }, []);

  return (
    <div className={`navbar py-10 px-[135px] z-10 ${absolutePosition && 'absolute'} ${background && 'bg-black/5'}`}>
      <Link to="/">
        <img src={logo} className="w-32" />
      </Link>

      {
        showSearch && (
          <div className="form-control mx-auto flex relative text-base">
            <CiSearch className={`absolute left-3  !text-white top-1/2 transform -translate-y-1/2 text-lg font-bold ${lightTheme ? "text-black" : "!text-white"
              }`} />
            <input
              type="text"
              placeholder="Search your Destination..."
              className={`!w-[370px] md:w-auto pl-10 py-3 font-semibold rounded-[5px] border !bg-transparent ${lightTheme ? "text-black placeholder-black border-black outline-black" : "text-white placeholder-white outline-white"
                }`}
            />
          </div>
        )
      }


      <div
        className="flex items-center gap-[50px] text-base font-medium ml-auto"
        style={{ color: `${navLinkColor}` }}>
        <NavLink>News</NavLink>
        <NavLink>Destination</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>Contact</NavLink>
        <button
          onClick={() => navigate('/login')}
          className="btn btn-md text-black px-10 bg-[#f9a51a] rounded-[5px] border-none">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;