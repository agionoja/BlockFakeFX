import Header from "../Components/Header.jsx";
import Hero from "../Components/Hero.jsx";
import Tab from "../Components/Tab.jsx";
import HowTO from "../Components/HowTO.jsx";

function LandingPage() {
  return (
    <div
      className={
        "md:max-w-1240 mx-auto mb-8 mt-4 flex min-w-300 flex-col justify-between gap-8 px-2 md:px-0"
      }
    >
      <div className={""}>
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <HowTO />
      </div>
    </div>
  );
}

export default LandingPage;
