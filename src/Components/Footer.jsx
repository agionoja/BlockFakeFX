import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className=" flex  h-300 w-full items-center justify-center  gap-2 rounded-tl-2xl  rounded-tr-2xl bg-celestialBlue  py-8 font-sans text-whiteSmoke opacity-[0.6] md:justify-evenly    md:opacity-[1] ">
      <div className=" mx-1 h-5 w-12 md:h-32 md:w-40 ">
        <img src={logo} className=" h-18 w-12" />
      </div>
      <div className=" ml-4 whitespace-nowrap  md:mr-[18rem]">
        <h6 className=" font-noraml  mb-2 text-xl ">Quick links</h6>
        <ul className="  list-none text-[14px]  leading-8">
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
      <div className=" ml-7 flex flex-col gap-3  whitespace-nowrap  text-[14px] md:mr-4 md:flex-row md:justify-evenly md:gap-[2em] ">
        <div className=" leading-8 md:mb-8 md:mr-24 ">
          <h6 className=" mb-3 text-2xl font-normal">Support</h6>
          <ul className=" list-none">
            <li>08001020300</li>
            <li>support@blockfake.com</li>
          </ul>
        </div>
        {/* icons */}
        <div className=" mt-2 flex w-24 gap-2 ">
          <div className=" cursor-pointer rounded-full bg-slate-50  p-2.5  text-xl text-[#00436F] md:h-10">
            <FaTwitter />
          </div>

          <div className=" cursor-pointer rounded-full bg-slate-50  p-2.5  text-xl text-[#00436F] md:h-10">
            <FaFacebook />
          </div>
          <div className=" cursor-pointer rounded-full bg-slate-50  p-2.5  text-xl text-[#00436F] md:h-10">
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
