import { AiOutlineClose } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useContext } from "react"
import PageContext from "../context/PageContext.jsx"

export default function Modal({ children, path }) {
  return (
    <div>
      <div className={"absolute  top-0 right-0 left-0 mx-auto mt-[8.5rem] md:mt-[9rem] z-[1000]"}>
        {children}
      </div>

      <div className={"fixed  left-0 right-0 top-0 w-full h-full bg-overlay backdrop-blur-sm z-[500]"}></div>
      <Link to={path}>
        <AiOutlineClose className={"z-[1000] absolute top-20 left-0 right-0 mx-auto cursor-pointer "} />
      </Link>
    </div>
  )
}