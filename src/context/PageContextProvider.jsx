import PageContext from "./PageContext.jsx";
import usePageContext from "./usePageContext.jsx";

function PageContextProvider({ children }) {
  const value = usePageContext();
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}

export default PageContextProvider;
