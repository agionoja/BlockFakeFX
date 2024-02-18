import logo from "/src/assets/logo.png";
import hamburger from "/src/assets/hamburger.png";
import close from "../assets/icon-close.svg";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import PageContext from "../context/PageContext.jsx";

const Header = () => {
  const [isHidden, setIsHidden] = useState(true);
  const { activeRoute } = useContext(PageContext);
  const toggleIsHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="relative flex h-full w-full justify-between ">
      <div className={"flex gap-2"}>
        <button onClick={toggleIsHidden} className={"z-50  md:hidden "}>
          <img className={" w-8"} src={isHidden ? hamburger : close} alt="" />
        </button>
        <img src={logo} alt="" />
      </div>
      <nav className={" justify-center   md:flex md:w-436 "}>
        <ul
          className={
            `${isHidden ? "-translate-y-60" : "-translate-y-0"}` +
            " absolute -left-4 -top-4 z-20 flex h-56 w-3/4 flex-col gap-5 rounded-none  bg-whiteSmoke pl-4 pt-16 text-lg text-gray transition duration-500 md:static md:h-12 md:w-full md:-translate-y-0 md:flex-row  md:items-center md:justify-between md:gap-0 md:rounded-3xl md:px-10 md:pt-0 md:text-sm "
          }
        >
          <li>
            <Link
              className={`${activeRoute() === "/" ? "active-route" : ""}`}
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${activeRoute() === "/about-us" ? "active-route" : ""}`}
              to={"/"}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className={`${activeRoute() === "/faq" ? "active-route" : ""}`}
              to={"/"}
            >
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
      <button className=" rounded-3xl bg-indigoDye px-4 text-xs text-white md:px-7 md:text-sm">
        Report Drug
      </button>
    </div>
  );
};

export default Header;
