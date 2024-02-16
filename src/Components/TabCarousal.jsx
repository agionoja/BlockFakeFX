import Tab1 from "./Tab1.jsx";
import Tab2 from "./Tab2.jsx";
import Tab3 from "./Tab3.jsx";
import { useContext, useState } from "react";
import PageContext from "../PageContext.jsx";

function TabCarousal() {
  const tabData = [Tab1, Tab2, Tab3];

  const { tabIndex, setTabIndex } = useContext(PageContext);
  return (
    <section className={"h-full w-full overflow-hidden"}>
      {tabData.map((Tab, index) => (
        <div
          style={{ transform: `translateY(${-100 * tabIndex}%)` }}
          key={index}
          className={
            "flex h-full w-full flex-col items-center  justify-center rounded-3xl bg-whiteSmoke py-3.5 text-center text-textBlack transition duration-500"
          }
        >
          <Tab></Tab>
        </div>
      ))}
    </section>
  );
}

export default TabCarousal;
