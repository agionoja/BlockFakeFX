import qrImage from "*.png"

export default function ScanDrug() {
  return (
    <button
      className={"bottom-5 left-0 right-0 z-50 mx-auto py-4 md:bottom-10"}
    >
      <img src={qrImage} alt="" />
    </button>


  )
}