import Modal from "../Components/Modal.jsx"
import { useContext } from "react"
import PageContext from "../context/PageContext.jsx"
import { calcImg, drugExpiredStatus, parseDate } from "../../utils/utils.js"

export default function Result() {
  const { setFetchedResult, setScannedResult, setNotFoundError, fetchedResult, notFoundError } = useContext(PageContext)

  const isExpired = drugExpiredStatus(fetchedResult.expiryDate)
  const imageToShow = calcImg(fetchedResult, isExpired, notFoundError)
  const manufacturingDate = parseDate(fetchedResult.manufacturedDate)
  const drugName = fetchedResult.drugName
  const manufacturer = fetchedResult.manufacturer
  const expiryDate = parseDate(fetchedResult.expiryDate)
  const nafReg = fetchedResult.nafdacReg
  const component = fetchedResult.component
  const dateScanned = parseDate(new Date())

  const handleReset = () => {
    setFetchedResult(false)
    setScannedResult(false)
    setNotFoundError(false)
  }

  return (
    <Modal className={"fixed -top-14"}>
      <section
        // style={{ backgroundImage: `url(${expiredImg})` }}
        className={
          `${!fetchedResult ? "h-[450px] " : "h-[440px] "}` +
          " relative mx-auto  flex w-[345px] flex-col items-center  rounded-lg bg-whiteSmoke px-10 py-8 md:h-[30rem] md:w-[420px]"
        }
      >
        {notFoundError && (
          <div className={"absolute top-6 text-center "}>
            <h2 className={" mb-2 text-xl font-bold"}>
              This Drug isn’t known to BlockFakeRx
            </h2>
            <h3>Please call +2349009090900</h3>
          </div>
        )}

        {fetchedResult && (
          <div className="mt-4 flex w-[19rem] flex-col   gap-2  rounded-lg bg-white  p-6 text-gray md:h-[21rem] md:w-[23rem]">
            <h2 className={"mb-2 font-bold text-black"}>Drugs Details</h2>
            <div className="flex justify-between">
              <p>Drug Name</p>
              <p>{drugName}</p>
            </div>
            <div className="flex justify-between">
              <p>Mngf Date</p>
              <p>{manufacturingDate}</p>
            </div>
            <div className="flex justify-between">
              <p>Manufacturer</p>
              <p>{manufacturer}</p>
            </div>
            <div className="flex justify-between">
              <p>Expiry Date</p>
              <p className={"text-fireEngineRed"}>{expiryDate}</p>
            </div>
            <div className="flex justify-between">
              <p>Date Scanned</p>
              <p>{dateScanned}</p>
            </div>
            <div className="flex justify-between">
              <p>Nafdac Number</p>
              <p>{nafReg}</p>
            </div>
            <div className="flex justify-between">
              <p>component</p>
              <p>{component}</p>
            </div>
            {/*<div className="flex justify-between">*/}
            {/*  <p>hi</p>*/}
            {/*  <p>sup</p>*/}
            {/*</div>*/}
          </div>
        )}
        <img
          className={"absolute mx-auto my-5 object-contain opacity-30"}
          alt={""}
          src={imageToShow}
        />

        <button
          onClick={handleReset}
          className={
            "absolute bottom-4 rounded-2xl bg-celestialBlue px-10 py-2 "
          }
        >
          Close
        </button>
      </section>
    </Modal>
  )
}
