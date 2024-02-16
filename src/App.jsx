import React from "react";
import HowTO from "./Components/HowTO.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Tab from "./Components/Tab.jsx";
import TabCarousal from "./Components/TabCarousal.jsx";
import PageContextProvider from "./PageContextProvider.jsx";

function App() {
  return (
    <div>
      <PageContextProvider>
        <div className={"mx-auto w-1240"}>
          <Tab />
        </div>
        {/*<BrowserRouter>*/}
        {/*  <Routes>*/}
        {/*    <Route path={"/"} element={<Header />}></Route>*/}
        {/*  </Routes>*/}
        {/*</BrowserRouter>*/}
      </PageContextProvider>
    </div>
  );
}

export default App;
