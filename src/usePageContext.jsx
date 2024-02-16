import { useLocation } from "react-router-dom";
import { useState } from "react";

function usePageContext() {
  // const location = useLocation();
  const [tabIndex, setTabIndex] = useState(0);
  return {
    // location,
    tabIndex,
    setTabIndex,
  };
}

export default usePageContext;
