import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

function usePageContext() {
  const location = useLocation()
  const [scannerOn, setScannerOn] = useState(false)
  const [scannedResult, setScannedResult] = useState("")
  const [fetchedResult, setFetchedResult] = useState("")

  const activeRoute = () => {
    return location.pathname
  }

  return {
    activeRoute,
    scannerOn,
    setScannerOn,
    scannedResult,
    setScannedResult,
    fetchedResult,
    setFetchedResult
  }
}

export default usePageContext
