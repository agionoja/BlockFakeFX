import { AiOutlineClose } from "react-icons/ai"
import { Navigate } from "react-router-dom"
import { useState } from "react"


export default function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen(prevState => !prevState)
  }

  // {!isOpen && }
  return (

    <div>
      {isOpen && <Navigate to={"/"} />}

      <div className={"absolute top-0 right-0 left-0 mx-auto mt-[6.9rem] md:mt-[6.5rem] z-[1000] shadow-lg w-80"}>
        {children}
      </div>

      <div className={"fixed left-0 right-0 top-0 w-full h-full bg-overlay backdrop-blur-sm z-[500]"}></div>
      <AiOutlineClose onClick={toggleIsOpen}
                      className={"z-[1000] absolute top-20 left-0 right-0 mx-auto cursor-pointer "} />

    </div>
  )
}