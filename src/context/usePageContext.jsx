import { useLocation } from "react-router-dom"
import { useState } from "react"
import Spinner from "../Components/Spinner.jsx"

function usePageContext() {
  const location = useLocation()
  const [scannerOn, setScannerOn] = useState(false)
  const [scannedResult, setScannedResult] = useState("")
  const [fetchedResult, setFetchedResult] = useState("")
  const [notFoundError, setNotFoundError] = useState(false)
  const [searchCounter, setSearchCounter] = useState(0)
  const [checked, setChecked] = useState(false)

  const activeRoute = () => {
    return location.pathname
  }

  const displaySpinner = (scanner = true) => {
    if (scanner) {
      return scannedResult && !fetchedResult && !notFoundError && <Spinner />
    }
    return checked && !fetchedResult && !notFoundError && <Spinner />
  }

  const handleError = (status) => {
    if (status === 404) {
      console.log("Not found page")
      setNotFoundError(true)
    }
  }

  return {
    displaySpinner,
    activeRoute,
    handleError,
    scannerOn,
    setScannerOn,
    scannedResult,
    setScannedResult,
    fetchedResult,
    setFetchedResult,
    notFoundError,
    setNotFoundError,
    searchCounter,
    setSearchCounter,
    setChecked
  }
}

export default usePageContext
