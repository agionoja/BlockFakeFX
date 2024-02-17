import qrImage from "../assets/scan-qr-img.png";
import animationLeft from "../assets/animation-left.png";
import animationRight from "../assets/animation-right.png";

const Hero = () => {
  return (
    <section
      className={
        " relative  flex w-full flex-col items-center justify-center gap-5 rounded-3xl bg-celestialBlue py-8 text-center text-textBlack md:py-16"
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
            " w-64 rounded-3xl  px-5 py-4 text-[0.65rem] outline-none md:w-436 md:px-10 md:text-sm"
          }
          type="text"
          placeholder={"Enter the secure digit on your drug pack"}
        />

        <button
          className={
            "z-50 rounded-3xl bg-indigoDye px-5  py-4  font-medium text-white md:px-10"
          }
        >
          Scan
        </button>
      </fieldset>
      <div className={"relative my-4 flex items-center justify-center gap-4"}>
        <div className={"h-0.5 w-32 bg-white md:w-52"}></div>
        <span>or</span>
        <div className={"h-0.5 w-32 bg-white md:w-52"}></div>
      </div>
      <button className={"absolute bottom-10 left-0 right-0 mx-auto"}>
        <img src={qrImage} alt="" />
      </button>

      <div
        className={
          "absolute bottom-14 left-0 right-0 flex animate-pulse justify-between"
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
  );
};

export default Hero;
