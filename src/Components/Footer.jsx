import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className=" relative  flex h-full w-full items-center justify-between gap-2 rounded-tl-3xl  rounded-tr-3xl bg-celestialBlue  bg-opacity-[0.6]  py-8 text-whiteSmoke  md:justify-around md:bg-opacity-[1] md:p-6">
      <div className=" mx-4 md:mb-8 lg:mr-24">
        <img src={logo} />
      </div>
      <div className=" mr-4  whitespace-nowrap md:mr-[5rem] md:mt-8 md:text-xl">
        <h6 className=" mb-2  text-sm font-semibold md:text-xl">Quick links</h6>
        <ul className="  list-none text-[12px] font-normal leading-6 md:text-[16px]">
          <a href="">
            {" "}
            <li className="">Home</li>
          </a>
          <a href="">
            <li className="">About us</li>
          </a>
          <a href="">
            <li className="">FAQ</li>
          </a>
        </ul>
      </div>
      <div className=" mr-2 flex flex-col gap-1 text-[12px]  md:mt-8  md:flex-row md:justify-evenly md:gap-[3rem]  md:text-[16px]">
        <div className=" whitespace-nowrap leading-6 md:mb-8 md:mr-[3rem]">
          <h6 className=" mb-3 text-sm font-semibold md:text-xl">Support</h6>
          <ul className=" list-none">
            <li>08001020300</li>
            <li>support@blockfake.com</li>
          </ul>
        </div>
        {/* icons */}
        <div className=" mt-2 flex  gap-2  md:mt-0 lg:ml-24">
          <div className=" h-8 w-8 cursor-pointer rounded-full bg-slate-50  p-2  text-[18px] text-[#00436F] md:h-10 md:w-10 md:text-2xl">
            <FaTwitter />
          </div>

          <div className=" h-8 w-8 cursor-pointer rounded-full bg-slate-50 p-2  text-[18px] text-[#00436F] md:h-10 md:w-10 md:text-2xl">
            <FaFacebook />
          </div>
          <div className=" h-8 w-8 cursor-pointer rounded-full bg-slate-50 p-2  text-[18px] text-[#00436F] md:h-10 md:w-10 md:text-2xl">
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
