import qrImage from "../assets/scan-qr-img.png"
import animationLeft from "../assets/animation-left.png"
import animationRight from "../assets/animation-right.png"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section
      className={
        " relative flex  w-full flex-col items-center justify-center gap-5 rounded-3xl bg-celestialBlue px-2 py-8 text-center text-white md:py-16"
      }
    >
      <h1
        className={
          "text-3xl font-medium leading-10 text-white md:w-2/4 md:text-4xl"
        }
      >
        Verify Your Meds Instantly! Your Health, Our Priority
      </h1>

      <h2 className={"text-lg leading-relaxed"}>
        Empowering Nigerians with Instant Assurance: Scan, Verify, Thrive. Your
        Wellness, Our Commitment.
      </h2>

      <fieldset className={"flex gap-2"}>
        <input
          className={
            " rounded-3xl px-5  py-4 text-[0.65rem] text-textBlack outline-none md:w-436 md:max-w-[436px] md:px-10 md:text-sm"
          }
          type="text"
          placeholder={"Enter the secure digit on your drug pack"}
        />

        <button
          className={"z-50 rounded-3xl bg-indigoDye px-5 text-white md:px-10"}
        >
          Check
        </button>
      </fieldset>
      <div
        className={"relative my-4 flex items-center justify-center gap-4 pb-4"}
      >
        <div className={"h-0.5 w-32 bg-white md:w-52"}></div>
        <span>or</span>
        <div className={"h-0.5 w-32 bg-white md:w-52"}></div>
      </div>
      <Link to={"/qr-scanner"}
            className={
              "a bottom-5 left-0 right-0 z-50 mx-auto py-4 md:bottom-10"
            }
      >
        <img src={qrImage} alt="" />
      </Link>

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
    </section>
  )
}

export default Hero
