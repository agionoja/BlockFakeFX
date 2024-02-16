function Tab3() {
  return (
    <div className={"flex w-full flex-col items-center"}>
      <div
        className={" w-3/5 flex-col flex-wrap rounded-3xl bg-white px-10 py-2"}
      >
        <div className={"tab-3-wrap"}>
          <h2>Drug Name</h2> <p>CARMITRINE 500g</p>
        </div>
        <div className={"tab-3-wrap"}>
          <h2>Mngt Date</h2> <p>1st Sept. 2021</p>
        </div>
        <div className={"tab-3-wrap"}>
          <h2>Manufacturer </h2> <p>Fascopharm Uk</p>
        </div>
        <div className={"tab-3-wrap"}>
          <h2>Expiry Date</h2>{" "}
          <p className={"text-fireEngineRed"}>1st Sept. 2023</p>
        </div>
      </div>

      <p className={"mt-2"}>
        Instantly verify your product's authenticity and status for peace of
        mind
      </p>
    </div>
  );
}

export default Tab3;
