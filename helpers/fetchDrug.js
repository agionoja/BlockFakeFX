import axios from "axios";

export default async function fetchDrug(data) {
  try {
    const response = await axios.post(
      "https://blockfake.onrender.com/route/drug/find",
      data,
      {
        headers: { "Content-Type": "application/json" }, // Use "headers" instead of "Content-Type" for setting headers
      },
    );
    return response.data; // Return the data from the response
  } catch (err) {
    throw new err(); // Throw the error to be caught by the caller
  }
}
