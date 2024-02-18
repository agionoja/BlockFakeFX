import Tab from "./Tab.jsx";

function HowTO() {
  return (
    <section className={"  w-full"}>
      <div className={"mx-auto"}>
        <h2
          className={" mb-1  text-center font-bold text-textBlack md:text-lg"}
        >
          Use USSD to verify Code
        </h2>
        <p className={"text-center  text-gray md:text-2xl"}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Verify your medications for safety with a simple USSD code! Here's how
        </p>
      </div>
      <Tab></Tab>
    </section>
  );
}

export default HowTO;
