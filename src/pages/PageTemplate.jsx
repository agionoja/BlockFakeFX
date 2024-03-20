import Header from "../Components/Header.jsx";
import Hero from "../Components/Hero.jsx";
import HowTO from "../Components/HowTO.jsx";
import Footer from "../Components/Footer.jsx";
import Modal from "../Components/Modal.jsx";
import QrFrame from "../Components/qr-reader/QrFrame.jsx";
import { useContext } from "react";
import PageContext from "../context/PageContext.jsx";
import Result from "./Result.jsx";
import Spinner from "../Components/Spinner.jsx";

function LandingPage({ children }) {
  const { scannerOn, scannedResult, searchDrug } = useContext(PageContext);
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
      {scannerOn && !scannedResult && (
        <Modal>
          <QrFrame />
        </Modal>
      )}

      {/*{scannedResult && <Result />}*/}

      {scannedResult && <Spinner />}
      {searchDrug && <Spinner />}
      <Footer />
    </div>
  );
}

export default LandingPage;
