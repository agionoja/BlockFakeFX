import React from "react";
import HowTO from "./Components/HowTO.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Tab from "./Components/Tab.jsx";
import TabCarousal from "./Components/TabCarousal.jsx";
import PageContextProvider from "./PageContextProvider.jsx";
import Hero from "./Components/Hero.jsx";
import Webcam from "./Components/Webcam.jsx";

function App() {
  return (
    <PageContextProvider>
      <div
        className={
          "md:max-w-1240 mx-auto min-w-300 justify-between px-2 md:px-0"
        }
      >
        {/*<HowTO />*/}
        {/*<Header />*/}
        {/*<Hero />*/}
        {/*<BrowserRouter>*/}
        {/*  <Routes>*/}
        {/*    <Route path={"/"} element={<Header />}></Route>*/}
        {/*  </Routes>*/}
        {/*</BrowserRouter>*/}
        <Hero />
      </div>
    </PageContextProvider>
  );
}

export default App;
