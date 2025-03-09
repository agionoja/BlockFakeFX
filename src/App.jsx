// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/home";
// import Product from "./pages/Product";
// import Cart from "./pages/Cart";
// import ProductDetails from "./pages/ProductDetails";
// import Product1 from "./pages/Product1";
// import Product2 from "./pages/Product2";
// import Product3 from "./pages/Product3";
// import Product4 from "./pages/Product4";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/product" element={<Product />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/product/:id" element={<ProductDetails />} />
//       <Route path="/product1" element={<Product1 />} />
//       <Route path="/product2" element={<Product2 />} />
//       <Route path="/product3" element={<Product3 />} />
//       <Route path="/product4" element={<Product4 />} />
//     </Routes>
//   );
// }

// export default App;







import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home";
import Product from "./pages/Product";
import Cart from "./pages/Cart"; // ✅ Use the correct import for the Cart page
import ProductDetails from "./pages/ProductDetails";
import Product1 from "./pages/Product1";
import Product2 from "./pages/Product2";
import Product3 from "./pages/Product3";
import Product4 from "./pages/Product4";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} /> {/* ✅ Correct usage */}
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product1" element={<Product1 />} />
        <Route path="/product2" element={<Product2 />} />
        <Route path="/product3" element={<Product3 />} />
        <Route path="/product4" element={<Product4 />} />
      </Routes>
    </>
  );
}

export default App;

