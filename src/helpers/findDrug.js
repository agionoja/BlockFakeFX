import axios from "axios";

export default function findDrug(drugId) {
  // drugId: "Panadol_1710500218279"
  axios
    .post(
      "https://blockfake.onrender.com/route/drug/find",
      { drugId },
      { "Content-Type": "application/json" },
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
}
