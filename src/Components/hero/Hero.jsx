import CheckDrug from "./CheckDrug.jsx"
import ScanDrug from "./ScanDrug.jsx"
import HeroAnimation from "./HeroAnimation.jsx"
import HeroMessage from "./HeroMessage.jsx"
import HeroBreak from "./HeroBreak.jsx"

const Hero = () => {
  return (
    <section
      className={
        " relative flex  w-full flex-col items-center justify-center gap-5 rounded-3xl bg-celestialBlue px-2 py-8 text-center text-white md:py-16"
      }
    >
      <HeroMessage />
      <CheckDrug />
      <HeroBreak />
      <ScanDrug />
      <HeroAnimation />
    </section>
  )
}

export default Hero

