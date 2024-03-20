import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageContextProvider from "./context/PageContextProvider.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Result from "./pages/Result.jsx";

function App() {
  return (
    <BrowserRouter>
      <PageContextProvider>
        <Routes>
          <Route path={"/"} element={<LandingPage />}></Route>
          {/*<Route path={"/qr-scanner"} element={<QrPage />} />*/}
          <Route path={"/scanned-result"} element={<Result />} />
        </Routes>
      </PageContextProvider>
    </BrowserRouter>
  );
}

export default App;
