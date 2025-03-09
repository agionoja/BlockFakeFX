// import { useNavigate } from "react-router-dom";
// import FlexCables from "../assets/FlexCables.jpg";
// import FourCoreAmoredCable from "../assets/FourCoreAmoredCable.jpg";
// import GreenRedBlackWires from "../assets/GreenRedBlackWires.jpg";
// import StripedCoilsCables from "../assets/StripedCoilsCables.jpg";
// import TwinNigerianCable from "../assets/TwinNigerianCable.jpg";
// import BindingWire from "../assets/BindingWire.jpg";

// export default function Product1() {
//   const navigate = useNavigate(); // Hook for navigating back

//   const products = [
//     { id: 1, name: "Flex Nigerian Cables", image: FlexCables, price: "₦15,000" },
//     { id: 2, name: "4 Cores Industrial Armored Cables", image: FourCoreAmoredCable, price: "₦22,000" },
//     { id: 3, name: "Rolls And Coils Of Wires Available", image: GreenRedBlackWires, price: "₦11,000" },
//     { id: 4, name: "Striped Coils Cables For House Wiring", image: StripedCoilsCables, price: "₦18,500" },
//     { id: 5, name: "Original Twin Nigerian Cable", image: TwinNigerianCable, price: "₦27,000" },
//     { id: 6, name: "Binding Wire For Residential And Industrial Uses", image: BindingWire, price: "₦7,500" },
//   ];
  

//   return (
//     <div className="p-6">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-4 px-4 py-2 bg-gray-600 text-black rounded-md hover:bg-gray-700 transition text-lg bg-blue-600">
//         ← Back
//       </button>

//       <h1 className="text-2xl font-bold mb-4 text-center">Available Wires</h1>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-40 object-cover rounded-lg"
//               onError={(e) => (e.target.src = "/images/placeholder.jpg")} // Fallback image
//             />
//             <h2 className="text-lg font-semibold mt-2 text-gray-800 text-center">
//               {product.name}
//             </h2>
//             <p className="text-center text-gray-600">{product.price}</p>

//             {/* Add to Cart Button */}
//             <button
//               className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }








// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import { FaShoppingCart } from "react-icons/fa";
// import FlexCables from "../assets/FlexCables.jpg";
// import FourCoreAmoredCable from "../assets/FourCoreAmoredCable.jpg";
// import GreenRedBlackWires from "../assets/GreenRedBlackWires.jpg";
// import StripedCoilsCables from "../assets/StripedCoilsCables.jpg";
// import TwinNigerianCable from "../assets/TwinNigerianCable.jpg";
// import BindingWire from "../assets/BindingWire.jpg";

// export default function Product1() {
//   const navigate = useNavigate(); // Hook for navigating back
//   const [cartCount, setCartCount] = useState(0);

//   const products = [
//     { id: 1, name: "Flex Nigerian Cables", image: FlexCables, price: "₦15,000" },
//     { id: 2, name: "4 Cores Industrial Armored Cables", image: FourCoreAmoredCable, price: "₦22,000" },
//     { id: 3, name: "Rolls And Coils Of Wires Available", image: GreenRedBlackWires, price: "₦11,000" },
//     { id: 4, name: "Striped Coils Cables For House Wiring", image: StripedCoilsCables, price: "₦18,500" },
//     { id: 5, name: "Original Twin Nigerian Cable", image: TwinNigerianCable, price: "₦27,000" },
//     { id: 6, name: "Binding Wire For Residential And Industrial Uses", image: BindingWire, price: "₦7,500" },
//   ];

//   const addToCart = () => {
//     setCartCount(cartCount + 1);
//     toast.success("Item added to cart!", { position: "top-right", autoClose: 2000 });
//   };

//   return (
//     <div className="p-6 relative">
//       {/* Cart Icon with Badge */}
//       <div className="absolute top-4 right-6 flex items-center">
//         <FaShoppingCart className="text-2xl text-gray-800" />
//         {cartCount > 0 && (
//           <span className="ml-1 bg-red-600 text-white text-sm px-2 rounded-full">{cartCount}</span>
//         )}
//       </div>

//       {/* Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition text-lg"
//       >
//         ← Back
//       </button>

//       <h1 className="text-2xl font-bold mb-4 text-center">Available Wires</h1>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-40 object-cover rounded-lg"
//               onError={(e) => (e.target.src = "/images/placeholder.jpg")}
//             />
//             <h2 className="text-lg font-semibold mt-2 text-gray-800 text-center">
//               {product.name}
//             </h2>
//             <p className="text-center text-gray-600">{product.price}</p>

//             {/* Add to Cart Button */}
//             <button
//               onClick={addToCart}
//               className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Toast Notification Container */}
//       <ToastContainer />
//     </div>
//   );
// }







import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import cart context
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FlexCables from "../assets/FlexCables.jpg";
import FourCoreAmoredCable from "../assets/FourCoreAmoredCable.jpg";
import GreenRedBlackWires from "../assets/GreenRedBlackWires.jpg";
import StripedCoilsCables from "../assets/StripedCoilsCables.jpg";
import TwinNigerianCable from "../assets/TwinNigerianCable.jpg";
import BindingWire from "../assets/BindingWire.jpg";

export default function Product1() {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Get addToCart function from context

  const products = [
    { id: 1, name: "Flex Nigerian Cables", image: FlexCables, price: "₦15,000" },
    { id: 2, name: "4 Cores Industrial Armored Cables", image: FourCoreAmoredCable, price: "₦22,000" },
    { id: 3, name: "Rolls And Coils Of Wires Available", image: GreenRedBlackWires, price: "₦11,000" },
    { id: 4, name: "Striped Coils Cables For House Wiring", image: StripedCoilsCables, price: "₦18,500" },
    { id: 5, name: "Original Twin Nigerian Cable", image: TwinNigerianCable, price: "₦27,000" },
    { id: 6, name: "Binding Wire For Residential And Industrial Uses", image: BindingWire, price: "₦7,500" },
  ];

  return (
    <div className="p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition text-lg"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-4 text-center">Available Wires</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg"
              onError={(e) => (e.target.src = "/images/placeholder.jpg")}
            />
            <h2 className="text-lg font-semibold mt-2 text-gray-800 text-center">{product.name}</h2>
            <p className="text-center text-gray-600">{product.price}</p>

            <button
              className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              onClick={() => {
                addToCart(product);
                toast.success(`${product.name} added to cart!`);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
}
