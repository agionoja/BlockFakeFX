import logo from "/src/assets/logo.png";
import hamburger from "/src/assets/hamburger.png";
import close from "../assets/icon-close.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isHidden, setIsHidden] = useState(true);
  const toggleIsHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="relative mx-auto flex w-343 justify-between md:w-1240">
      <div className={"flex gap-2"}>
        <button onClick={toggleIsHidden} className={"z-50 pl-4 md:hidden"}>
          <img className={" w-8"} src={isHidden ? hamburger : close} alt="" />
        </button>
        <img src={logo} />
      </div>
      <nav
        className={
          " justify-center md:flex md:w-436 " + `${isHidden ? "hidden" : ""}`
        }
      >
        <ul className="absolute left-0 top-0 flex h-56  w-2/4 flex-col gap-5 rounded-none bg-whiteSmoke pl-4 pt-16 text-lg text-gray md:static md:h-12 md:w-full md:flex-row  md:items-center md:justify-between md:gap-0 md:rounded-3xl md:px-10 md:pt-0 md:text-sm ">
          <Link to={"/"}>Home</Link>
          <li>
            <Link to={"/"}>About Us</Link>
          </li>
          <li>
            <Link to={"/"}>FAQ</Link>
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
