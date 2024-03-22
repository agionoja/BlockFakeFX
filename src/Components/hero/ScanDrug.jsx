import qrImage from "../../assets/scan-qr-img.png"
import { useState } from "react"
import QrFrame from "../qr-reader/QrFrame.jsx"
import Modal from "../Modal.jsx"
import { Fa0 } from "react-icons/fa6"

export default function ScanDrug() {
  const [qrOpen, setQrOpen] = useState(false)

  const toggleQrOpen = () => {
    setQrOpen(prevState => !prevState)
  }
  return (
    <>
      <button
        onClick={toggleQrOpen}
        className={"bottom-5 left-0 right-0 z-50 mx-auto py-4 md:bottom-10"}
      >
        <img src={qrImage} alt="" />
      </button>

      {qrOpen && <Modal><QrFrame /></Modal>}
    </>

  )
}