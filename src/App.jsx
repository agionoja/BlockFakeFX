import React from "react";
import HowTO from "./Components/HowTO.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Tab from "./Components/tab/Tab.jsx";
import TabCarousal from "./Components/tab/TabCarousal.jsx";
import PageContextProvider from "./context/PageContextProvider.jsx";
import Hero from "./Components/Hero.jsx";
import Webcam from "./Components/Webcam.jsx";
import LandingPage from "./pages/LandingPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <PageContextProvider>
        <Routes>
          <Route path={"/"} element={<LandingPage />}></Route>
        </Routes>
      </PageContextProvider>
    </BrowserRouter>
  );
}

export default App;
