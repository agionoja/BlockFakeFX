import Tab1 from "./Tab1.jsx";
import Tab2 from "./Tab2.jsx";
import Tab3 from "./Tab3.jsx";
import { useContext, useEffect, useState } from "react";
import PageContext from "../PageContext.jsx";

function TabCarousal() {
  const { tabIndex, setTabIndex, tabData } = useContext(PageContext);

  return (
    <section className={"relative h-full w-full overflow-hidden"}>
      {tabData.map((Tab, index) => (
        <div
          style={{
            transform: `translateY(${-100 * tabIndex}%)`,
          }}
          key={index}
          className={
            "flex h-full w-full items-center justify-center bg-whiteSmoke  " +
            "px-2 py-3.5 text-center text-textBlack transition duration-500 md:flex-col md:rounded-3xl"
          }
        >
          <Tab></Tab>
        </div>
      ))}

      <div
        className={
          "absolute left-0 right-0 top-0 flex justify-center gap-6 pt-5 md:hidden"
        }
      >
        {tabData.map((_, index) => (
          <button
            className={
              "h-8 w-8 transform rounded-full bg-white transition duration-500 " +
              `${tabIndex === index ? " !h-10 !w-10 !bg-celestialBlue text-white" : ""}`
            }
            // onClick={() => setTabIndex(index)}
            key={index}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}

export default TabCarousal;
