import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageContextProvider from "./context/PageContextProvider.jsx"
import PageTemplate from "./pages/PageTemplate.jsx"


function App() {
  return (
    <BrowserRouter>
      <PageContextProvider>
        <Routes>
          <Route path={"/"} element={<PageTemplate />}></Route>
        </Routes>
      </PageContextProvider>
    </BrowserRouter>
    // <QrFrame />
  )
}

export default App
