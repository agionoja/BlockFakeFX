import Header from "../Components/Header.jsx";
import Hero from "../Components/Hero.jsx";
import HowTO from "../Components/HowTO.jsx";
import Scanner from "../Components/Scanner.jsx"
import Footer from "../Components/Footer.jsx";

function LandingPage() {
  return (
    <div>
      <div
        className={
          "md:max-w-1240 mx-auto flex min-w-300 flex-col justify-between px-2 pt-4 md:px-0"
        }
      >
        <div className={"mb-10"}>
          <Header />
        </div>
        <div>
          <Hero />
        </div>
        <div className={"my-20"}>
          <HowTO />
        </div>
      </div>
      <div>
        <Scanner/>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
