import PageContext from "./PageContext.jsx";
import usePageContext from "./usePageContext.jsx";

function PageContextProvider({ children }) {
  return (
    <PageContext.Provider value={usePageContext()}>
      {children}
    </PageContext.Provider>
  );
}

export default PageContextProvider;
