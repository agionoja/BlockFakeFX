// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );





// import { CartProvider } from "./context/CartContext"
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <CartProvider>
//         <App />
//       </CartProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );




import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";  // Ensure correct import path
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>  {/* ✅ Wrap App with CartProvider */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>
);


