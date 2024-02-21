// import { useEffect, useRef, useState } from "react";

// // Qr Scanner
// import QrScanner from "qr-scanner";

// function QrReader() {
//   // QR States
//   const scanner = useRef(); // No explicit type
//   const videoEl = useRef(null);
//   const qrBoxEl = useRef(null);
//   const [qrOn, setQrOn] = useState(true); // Type inference

//   // Result
//   const [scannedResult, setScannedResult] = useState(""); // Type inference

//   // Success
//   const onScanSuccess = (result) => {
//     console.log(result);
//     setScannedResult(result?.data);
//   };

//   // Fail
//   const onScanFail = (err) => {
//     console.log(err);
//   };

//   useEffect(() => {
//     if (videoEl?.current && !scanner.current) {
//       scanner.current = new QrScanner(videoEl?.current, onScanSuccess, {
//         onDecodeError: onScanFail,
//         preferredCamera: "environment",
//         highlightScanRegion: true,
//         highlightCodeOutline: true,
//         overlay: qrBoxEl?.current || undefined,
//       });

//       scanner?.current
//         ?.start()
//         .then(() => setQrOn(true))
//         .catch((err) => {
//           if (err) setQrOn(false);
//         });
//     }

//     return () => {
//       if (!videoEl?.current) {
//         scanner?.current?.stop();
//       }
//     };
//   }, [onScanSuccess]);

//   useEffect(() => {
//     if (!qrOn)
//       alert(
//         "Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload.",
//       );
//   }, [qrOn]);

//   return (
//     <div className="h-full w-full">
//       {/* QR */}
//       <video className={"h-full w-full"} ref={videoEl}></video>
//       <div ref={qrBoxEl} className="qr-box"></div>

//       {/* Show Data Result if scan is success */}
//       {scannedResult && (
//         <p
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             zIndex: 99999,
//             color: "darkred",
//           }}
//         >
//           Scanned Result: {scannedResult}
//         </p>
//       )}
//     </div>
//   );
// }

// export default QrReader;
