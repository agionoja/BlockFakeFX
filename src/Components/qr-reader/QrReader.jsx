import QrScanner from "qr-scanner"
import { useContext, useEffect, useRef, useState } from "react"
import PageContext from "../../context/PageContext.jsx"

export default function QrReader() {
  const scanner = useRef(null)
  const videoEl = useRef(null)
  const qrBoxEl = useRef(null)
  const [qrOn, setQrOn] = useState(true)

  const { scannedResult, setScannedResult } = useContext(PageContext)

  useEffect(() => {
    if (videoEl.current && !scanner.current) {
      scanner.current = new QrScanner(
        videoEl.current,
        (result) => {
          console.log(result)
          setScannedResult(result)
        },
        {
          onDecodeError: (error) => console.log(error),
          preferredCamera: "environment",
          highlightCodeOutline: true,
          calculateScanRegion: () => {
            return {
              x: 0,
              y: 0,
              width: videoEl.current.videoWidth,
              height: videoEl.current.videoHeight
            }
          },
          highlightScanRegion: true,
          overlay: qrBoxEl.current || undefined
        }
      )

      scanner.current
        .start()
        .then(() => setQrOn(true))
        .catch(() => setQrOn(false))
    }

    return () => {
      if (!videoEl.current && scanner.current) {
        scanner.current.stop()
      }
    }
  }, [setScannedResult])


  useEffect(() => {
    if (!qrOn)
      alert(
        "Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload."
      )
  }, [qrOn])

  return (
    <>
      {!scannedResult && <div className={"relative h-full w-full "}>
        <video
          ref={videoEl}
          className={"h-full w-full rounded-2xl object-cover"}
        ></video>
        <div ref={qrBoxEl} className={"w-full"}></div>
      </div>}
    </>
  )
}
