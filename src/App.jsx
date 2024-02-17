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
      <div className={"px-4 md:px-0"}>
        <HowTO />
        <Webcam />
        {/*<Hero />*/}
      </div>
      {/*<BrowserRouter>*/}
      {/*  <Routes>*/}
      {/*    <Route path={"/"} element={<Header />}></Route>*/}
      {/*  </Routes>*/}
      {/*</BrowserRouter>*/}
    </PageContextProvider>
  );
}

export default App;
