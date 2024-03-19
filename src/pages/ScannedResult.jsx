import Modal from "../Components/Modal.jsx";
import authenticImg from "../assets/authentic.png";
import expiredImg from "../assets/expired.png";
import notFoundImg from "../assets/not-found.jpg";
import approved from "../assets/approved.png";
import certifiedImg from "../assets/certified.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ScannedResult() {
  const [isInDataBase, setIsInDataBase] = useState(true);
  const calcImg = () => {
    return approved;
  };

  return (
    <Modal>
      <section
        // style={{ backgroundImage: `url(${expiredImg})` }}
        className={
          `${isInDataBase ? "h-[450px] " : "h-[400px] "}` +
          " relative mx-auto  flex w-[330px] flex-col items-center  rounded-lg bg-whiteSmoke px-10 py-8"
        }
      >
        {/*<div className={"absolute top-6 text-center "}>*/}
        {/*  <h2 className={" mb-2 text-xl font-bold"}>*/}
        {/*    This Drug isn’t known to BlockFakeRx*/}
        {/*  </h2>*/}
        {/*  <h3>Please call +2349009090900</h3>*/}
        {/*</div>*/}
        {isInDataBase && (
          <div className="flex w-full flex-col gap-2 rounded-lg bg-white p-4 text-gray">
            <h2 className={"mb-2 font-bold text-black"}>Drugs Details</h2>
            <div className="flex justify-between">
              <p>Drug Name</p>
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
          className={"absolute mx-auto my-auto object-contain opacity-20"}
          alt={""}
          src={calcImg()}
        />

        <Link
          to={"/"}
          className={
            "absolute bottom-8 rounded-2xl bg-celestialBlue px-10 py-2 "
          }
        >
          Close
        </Link>
      </section>
    </Modal>
  );
}
