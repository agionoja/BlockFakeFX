import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Tab1 from "./Components/Tab1.jsx";
import Tab2 from "./Components/Tab2.jsx";
import Tab3 from "./Components/Tab3.jsx";

function usePageContext() {
  // const location = useLocation();
  const [tabIndex, setTabIndex] = useState(0);
  const tabData = [Tab1, Tab2, Tab3];

  useEffect(() => {
    const nextTab = () => {
      setTabIndex(() => {
        if (tabIndex === tabData.length - 1) return 0;
        return tabIndex + 1;
      });
    };

    setTimeout(() => {
      nextTab();
    }, 3000);
  }, [tabData.length, tabIndex]);

  return {
    // location,
    tabData,
    tabIndex,
    setTabIndex,
  };
}

export default usePageContext;
