<<<<<<< HEAD
import Header from "./Components/Header";
import React from "react";
=======
import HowTO from "./Components/HowTO.jsx";
import Header from "./Components/Header.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
>>>>>>> 953a889280c4909f5aac7d3986f4376d58c59344

function App() {
  return (
    <>
<<<<<<< HEAD
      <Header />
=======
      <div className={""}>
        {/*<HowTO></HowTO>*/}
        {/*<Header />*/}
      </div>

      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Header />}></Route>
        </Routes>
      </BrowserRouter>
>>>>>>> 953a889280c4909f5aac7d3986f4376d58c59344
    </>
  );
}
export default App;
