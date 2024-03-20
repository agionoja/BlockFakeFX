import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageContextProvider from "./context/PageContextProvider.jsx";
import PageTemplate from "./pages/PageTemplate.jsx";
import QrPage from "./pages/QrPage.jsx";
import ScannedResult from "./pages/ScannedResult.jsx";

function App() {
  return (
    <BrowserRouter>
      <PageContextProvider>
        <Routes>
          <Route path={"/"} element={<PageTemplate />}></Route>
          {/*<Route path={"/qr-scanner"} element={<QrPage />} />*/}
          <Route path={"/scanned-result"} element={<ScannedResult />} />
        </Routes>
      </PageContextProvider>
    </BrowserRouter>
  );
}

export default App;
