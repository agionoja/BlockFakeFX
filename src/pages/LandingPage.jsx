import Header from "../Components/Header.jsx";
import Hero from "../Components/Hero.jsx";
import Tab from "../Components/Tab.jsx";

function LandingPage() {
  return (
    <div
      className={
        "md:max-w-1240 mx-auto mt-4 min-w-300 justify-between px-2 md:px-0"
      }
    >
      <div className={"mb-8"}>
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Tab />
      </div>
    </div>
  );
}

export default LandingPage;
