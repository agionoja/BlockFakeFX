import qrImage from "../../assets/scan-qr-img.png"
import { useContext, useEffect, useState } from "react"
import QrFrame from "../qr-reader/QrFrame.jsx"
import Modal from "../Modal.jsx"
import { Fa0 } from "react-icons/fa6"
import PageContext from "../../context/PageContext.jsx"

export default function ScanDrug() {
  const [qrOpen, setQrOpen] = useState(false)
  const { scannedResult } = useContext(PageContext)

  useEffect(() => {
    if (scannedResult) {
      setQrOpen(false)
    }
  }, [scannedResult])

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

      {qrOpen && <Modal><QrFrame isHidden={qrOpen} onClick={toggleQrOpen} /></Modal>}
    </>

  )
}