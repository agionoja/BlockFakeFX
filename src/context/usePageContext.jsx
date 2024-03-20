import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Tab1 from "../Components/tab/Tab1.jsx";
import Tab2 from "../Components/tab/Tab2.jsx";
import Tab3 from "../Components/tab/Tab3.jsx";
import fetchDrug from "../../helpers/fetchDrug.js";

function usePageContext() {
  const location = useLocation();
  const [tabIndex, setTabIndex] = useState(0);
  const [scannerOn, setScannerOn] = useState(false);
  const [scannedResult, setScannedResult] = useState("");
  const [fetchedResult, setFetchedResult] = useState("");

  const tabData = [Tab1, Tab2, Tab3];
  // const routes = ["/", "/about-us", "/faq"];
  const activeRoute = () => {
    // console.log(location.pathname);
    return location.pathname;
  };

  useEffect(() => {
    const nextTab = () => {
      setTabIndex(() => {
        if (tabIndex === tabData.length - 1) return 0;
        return tabIndex + 1;
      });
    };

    setTimeout(() => {
      nextTab();
    }, 5000);
  }, [tabData.length, tabIndex]);

  useEffect(() => {
    if (scannedResult) {
      fetchDrug({ drugId: "Panadol_1710500218279" })
        .then((response) => {
          setFetchedResult(response);
          setScannedResult("");
          setScannerOn(false);
          console.log(response);
        })
        .catch((error) => console.log(error));
    }
  }, [scannedResult]);

  return {
    // location,
    activeRoute,
    tabData,
    tabIndex,
    setTabIndex,
    scannerOn,
    setScannerOn,
    scannedResult,
    setScannedResult,
    fetchedResult,
  };
}

export default usePageContext;
