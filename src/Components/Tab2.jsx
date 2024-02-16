import barCode from "../assets/bar-code.png";

function Tab2() {
  return (
    <div className={""}>
      <img className={"mx-auto mb-5"} src={barCode} alt="" />
      <p className={"text-textBlack"}>
        Input the unique code found on your medication packaging when prompted.
      </p>
    </div>
  );
}

export default Tab2;
