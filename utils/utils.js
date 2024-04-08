import axios from "axios"
import notFoundImg from "../src/assets/not-found.jpg"
import expiredImg from "../src/assets/expired.png"
import approved from "../src/assets/approved.png"

export async function fetchDrug(data) {
  try {
    const response = await axios.post(
      "https://blockfake.onrender.com/route/drug/find",
      data,
      {
        headers: { "Content-Type": "application/json" } // Use "headers" instead of "Content-Type" for setting headers
      }
    )
    return response.data // Return the data from the response
  } catch (err) {
    throw err // Throw the error to be caught by the caller
  }
}

export function parseDate(dateString) {
  const date = new Date(dateString)

  let day = date.getDate()
  const month = date.toLocaleString("default", { month: "short" })
  const year = date.getFullYear()

  if (day === 1 || day === 21 || day === 31) {
    day = day + "st"
  } else if (day === 2 || day === 22) {
    day = day + "nd"
  } else if (day === 3 || day === 23) {
    day = day + "rd"
  } else {
    day = day + "th"
  }
  return `${day} ${month} ${year}`
}

export  function drugExpiredStatus(expiryDate) {
 const status =new Date(expiryDate).getTime() > new Date().getTime()
  return!status

}

// console.log(parseDate("2024-08-23T13:50:46.659Z"))

export const calcImg = (fetchedResult, isExpired, notFound) => {
  if (notFound) return notFoundImg
  if (fetchedResult && !isExpired) return approved
  return expiredImg
}