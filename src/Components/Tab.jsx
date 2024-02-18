import { useContext } from "react";

import TabCarousal from "./TabCarousal.jsx";
import PageContext from "../context/PageContext.jsx";

function Tab() {
  const { tabIndex } = useContext(PageContext);
  const btnText = [
    "Dial the Code",
    "Enter the Medication Code",
    "Receive Instant Result",
  ];

  return (
    <section className={"relative mt-8 h-300 w-full"}>
      <div
        className={
          "absolute left-0 hidden h-full w-1/3 flex-col justify-center gap-8 rounded-3xl bg-whiteSmoke px-4 py-6 md:flex"
        }
      >
        {btnText.map((text, index) => (
          <button
            // onClick={() =>
            //   setTabIndex(
            //     index
            //   )
            // }
            className={`how-to-btn transform duration-500 ${tabIndex === index ? "bg-celestialBlue text-white" : ""}`}
            key={index}
          >
            {text}
          </button>
        ))}
      </div>
      <div
        className={
          " absolute right-0 h-300  rounded-3xl bg-whiteSmoke md:w-[64%]"
        }
      >
        <TabCarousal />
      </div>
    </section>
  );
}

export default Tab;
