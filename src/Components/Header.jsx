import logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.png";
import close from "../assets/icon-close.svg";

const Header = () => {
  return (
    <div className=" flex justify-between">
      <div>
        <img src={hamburger} alt="" />
        <img src={logo} />
      </div>
      <div className=" flex">
        <nav className=" h-[64px] w-[436px]">
          <ul className=" flex h-[64px] w-[436px]  bg-[D5D5D5]">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </nav>
        <button className=" w-[177px] rounded-[32px] bg-[#00436F]">
          Report Drug
        </button>
      </div>
    </div>
  );
};

export default Header;
