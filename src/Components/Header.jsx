import logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.png";
import close from "../assets/icon-close.svg";

const Header = () => {
  return (
    <div className=" w-1240 mx-[100px] my-[48px] flex items-center justify-between">
      <div className=" flex w-[106.81] justify-between">
        <button>
          <img src={hamburger} alt="" />
        </button>

        <img src={logo} />
      </div>
      {/* section */}
      <div className="  flex ">
        <nav className=" h-[44px] w-[837px] ">
          <ul className=" bg-whiteSmoke flex h-[64px] w-[436px] items-center justify-between rounded-[40px]">
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
        <button className=" bg-indigo bg-indigoDye h-[46] w-[103] rounded-[32px] md:w-[177px] ">
          Report Drug
        </button>
      </div>
    </div>
  );
};

export default Header;
