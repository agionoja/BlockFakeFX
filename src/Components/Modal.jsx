import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import PageContext from "../context/PageContext.jsx";

export default function Modal({ children, path = "/" }) {
  return (
    <div className={"flex w-full  justify-center"}>
      <div
        className={
          "absolute left-0 right-0 top-0 z-[1000]  mx-auto mt-[8.5rem] md:mt-[9rem]"
        }
      >
        {children}
      </div>

      <div
        className={
          "fixed  left-0 right-0 top-0 z-[500] h-full w-full bg-overlay backdrop-blur-sm"
        }
      ></div>
      <Link to={path}>
        <AiOutlineClose
          className={
            "absolute left-0 right-0 top-20 z-[1000] mx-auto cursor-pointer "
          }
        />
      </Link>
    </div>
  );
}
