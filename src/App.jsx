import HowTO from "./Components/HowTO.jsx";
import Header from "./Components/Header.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Header />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
