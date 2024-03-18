import PageTemplate from "./PageTemplate.jsx"
import Modal from "../Components/Modal.jsx"
import QrFrame from "../Components/qr-reader/QrFrame.jsx"

export default function QrPage() {
  return (
    <PageTemplate>
      <Modal path={"/"}>
        <QrFrame />
      </Modal>
    </PageTemplate>
  )
}