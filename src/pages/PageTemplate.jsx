import Header from "../Components/Header.jsx";
import Hero from "../Components/Hero.jsx";
import HowTO from "../Components/HowTO.jsx";
import Footer from "../Components/Footer.jsx";

function PageTemplate({ children }) {
  return (
    <div className={"relative"}>
      <div
        className={
          "mx-auto flex min-w-300 flex-col justify-between px-2 pt-4 md:max-w-1240 md:px-0"
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
      <Footer />
      {children}
    </div>
  );
}

export default PageTemplate;
