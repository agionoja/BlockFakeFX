import axios from "axios";

export default function ApICons() {
  const apiC = () => {
    axios
      .post(
        "https://blockfake.onrender.com/route/drug/find",
        { drugId: "Panadol_1710500218279" },
        { "Content-Type": "application/json" },
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button onClick={apiC}>consume</button>
    </div>
  );
}
