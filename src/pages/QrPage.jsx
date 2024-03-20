import LandingPage from "./LandingPage.jsx";
import Modal from "../Components/Modal.jsx";
import QrFrame from "../Components/qr-reader/QrFrame.jsx";

export default function QrPage() {
  return (
    <LandingPage>
      <Modal path={"/"}>
        <QrFrame />
      </Modal>
    </LandingPage>
  );
}
