import animationLeft from "../../assets/animation-left.png"
import animationRight from "../../assets/animation-right.png"

export default function HeroAnimation() {
  return (
    <div
      className={
        "absolute bottom-14 left-0 right-0 hidden animate-pulse justify-between md:flex"
      }
    >
      <img
        className={`w-28 transform duration-500 ease-in-out`}
        src={animationLeft}
        alt="ri"
      />
      <img
        className={`w-28 transform duration-500 ease-in-out `}
        src={animationRight}
        alt=""
      />
    </div>
  )
}