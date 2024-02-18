import { useContext } from "react";
import PageContext from "../context/PageContext.jsx";

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
            "flex h-full w-full items-center justify-center  " +
            "rounded-3xl px-2 py-3.5 text-center text-textBlack transition duration-500 md:flex-col"
          }
        >
          <Tab></Tab>
        </div>
      ))}

      <div
        className={
          "absolute left-0 right-0 top-0 flex items-center justify-center gap-6 pt-5 md:hidden"
        }
      >
        {tabData.map((_, index) => (
          <button
            className={
              "h-8 w-8 transform rounded-full bg-white transition duration-500 " +
              `${tabIndex === index ? " !h-10 !w-10 !bg-celestialBlue text-white shadow-lg" : ""}`
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
