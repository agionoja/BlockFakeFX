import qrImage from "../../assets/scan-qr-img.png"
import { useContext, useEffect, useState } from "react"
import QrFrame from "../qr-reader/QrFrame.jsx"
import Modal from "../Modal.jsx"
import PageContext from "../../context/PageContext.jsx"
import { fetchDrug } from "../../../utils/utils.js"

export default function ScanDrug() {
  const [qrOpen, setQrOpen] = useState(false)
  const {
    setFetchedResult,
    handleError,
    scannedResult,
    setScannedResult,
    displaySpinner,
    setSearchCounter
  } = useContext(PageContext)

  const spinner = displaySpinner()

  useEffect(() => {
    if (scannedResult) {
      console.log(scannedResult.data)
      fetchDrug({ drugId: scannedResult.data })
        .then((response) => {
          setFetchedResult(response)
          setScannedResult("")
          setSearchCounter(prevState => prevState + 1)
        })
        .catch((error) => {
          handleError(error.response.status)
          setScannedResult("")
          console.log(error.response.status)
        })
    }
  }, [handleError, scannedResult, setFetchedResult, setScannedResult, setSearchCounter])

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
      {spinner}
    </>

  )
}