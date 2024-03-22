import Modal from "../Components/Modal.jsx";
import expiredImg from "../assets/expired.png";
import notFoundImg from "../assets/not-found.jpg";
import approved from "../assets/approved.png";
import { useContext, useState } from "react";
import PageContext from "../context/PageContext.jsx";

export default function Result() {
  //   batchNumber: "123242"
  // ​
  // component: "water & Sand"
  // ​
  // createdAt: "2024-03-15T10:56:57.641Z"
  // ​
  // drugId: "Panadol_1710500218279"
  // ​
  // drugName: "Panadol"
  // ​
  // expiryDate: "2024-02-21T00:00:00.000Z"
  // ​
  // manufacturedDate: "2023-02-21T00:00:00.000Z"
  // ​
  // "Froggy";
  const { fetchedResult, setCloseResult } = useContext(PageContext);
  const isExpired = () => {
    const expiryDAte = fetchedResult.expiryDate;
    console.log(expiryDAte);

    return new Date(expiryDAte).getTime() < new Date().getTime();
  };
  const calcImg = () => {
    return fetchedResult ? notFoundImg : isExpired() ? expiredImg : approved;
  };

  return (
    <Modal className={"fixed -top-14"}>
      <section
        // style={{ backgroundImage: `url(${expiredImg})` }}
        className={
          `${!fetchedResult ? "h-[450px] " : "h-[400px] "}` +
          " relative mx-auto  flex w-[345px] flex-col items-center  rounded-lg bg-whiteSmoke px-10 py-8 md:h-[30rem] md:w-[420px]"
        }
      >
        {fetchedResult && (
          <div className={"absolute top-6 text-center "}>
            <h2 className={" mb-2 text-xl font-bold"}>
              This Drug isn’t known to BlockFakeRx
            </h2>
            <h3>Please call +2349009090900</h3>
          </div>
        )}

        {!fetchedResult && (
          <div className="mt-4 flex w-[19rem] flex-col  gap-2  rounded-lg bg-white  p-6 text-gray md:h-[21rem] md:w-[23rem]">
            <h2 className={"mb-2 font-bold text-black"}>Drugs Details</h2>
            <div className="flex justify-between">
              <p>Drug Name</p>
              <p>{fetchedResult.drugName}</p>
            </div>
            <div className="flex justify-between">
              <p>Mngf Date</p>
              <p>{new Date(fetchedResult.manufacturedDate).getDate()}</p>
            </div>
            <div className="flex justify-between">
              <p>hi</p>
              <p>sup</p>
            </div>
            <div className="flex justify-between">
              <p>hi</p>
              <p>sup</p>
            </div>
            <div className="flex justify-between">
              <p>hi</p>
              <p>sup</p>
            </div>
            <div className="flex justify-between">
              <p>hi</p>
              <p>sup</p>
            </div>
            <div className="flex justify-between">
              <p>hi</p>
              <p>sup</p>
            </div>
            <div className="flex justify-between">
              <p>hi</p>
              <p>sup</p>
            </div>
          </div>
        )}
        <img
          className={"absolute mx-auto my-12 object-contain opacity-30"}
          alt={""}
          src={calcImg()}
        />

        <button
          onClick={() => setCloseResult(true)}
          className={
            "absolute bottom-8 rounded-2xl bg-celestialBlue px-10 py-2 "
          }
        >
          Close
        </button>
      </section>
    </Modal>
  );
}
