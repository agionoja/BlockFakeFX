// import FiveWattAKTbulb from "../assets/FiveWattAKTbulb.jpg";
// import MotionDectatorLight from "../assets/MotionDectatorLight.jpg";
// import LEDSecurityLight from "../assets/LEDSecurityLight.jpg";
// import FiftyWattAKTbulb from "../assets/FiftyWattAKTbulb.jpg";
// import EightenWattPoplight from "../assets/EightenWattPoplight.jpg";
// import EightenWattSurfaceLight from "../assets/EightenWattSurfaceLight.jpg";
// import EightenWattAKTbulb from "../assets/EightenWattAKTbulb.jpg";/////////
// import DeckerSurfaceLight from "../assets/DeckerSurfaceLight.jpg";
// import AKThalogineBulb from "../assets/AKThalogineBulb.jpg";
// import AKTsolarStreetLight from "../assets/AKTsolarStreetLight.jpg";
// import SolarCameraLED from "../assets/SolarCameraLED.jpg";
// import StreetLight from "../assets/StreetLight.jpg";
// import FloodLight from "../assets/FloodLight.jpg";
// import ColoredFloodLight from "../assets/ColoredFloodLight.jpg";
// import TenWattfloodLight from "../assets/TenWattfloodLight.jpg";
// import RemoteSecurtySolarLight from "../assets/RemoteSecurtySolarLight.jpg";

// export default function Product1() {
//   const products = [
//     { id: 1, name: "5 watt AKT bulb , bright and clear", image: FiveWattAKTbulb },
//     { id: 2, name: "4 Cores Industral Amored Cable", image: MotionDectatorLight },
//     { id: 3, name: "Rolls And Coils Of Wires Available", image:LEDSecurityLight  },
//     { id: 4, name: "Striped Coils Cables For House Wiring", image: FiftyWattAKTbulb },
//     { id: 5, name: "Original Twin Nigerian Cable", image: EightenWattPoplight},
//     { id: 6, name: "Binding Wire For Residential And Industral Uses", image: EightenWattSurfaceLight },
//     { id: 7, name: "Binding Wire For Residential And Industral Uses", image: EightenWattAKTbulb },
//     { id: 8, name: "Binding Wire For Residential And Industral Uses", image: DeckerSurfaceLight },
//     { id: 9, name: "Binding Wire For Residential And Industral Uses", image: AKThalogineBulb }, 
//     { id: 11, name: "Binding Wire For Residential And Industral Uses", image: AKTsolarStreetLight},
//     { id: 12, name: "Binding Wire For Residential And Industral Uses", image:SolarCameraLED  },
//     { id: 13, name: "Binding Wire For Residential And Industral Uses", image: StreetLight },
//     { id: 14, name: "Binding Wire For Residential And Industral Uses", image: FloodLight },
//     { id: 15, name: "Binding Wire For Residential And Industral Uses", image: ColoredFloodLight },
//     { id: 16, name: "Binding Wire For Residential And Industral Uses", image: TenWattfloodLight },
//     { id: 17, name: "Binding Wire For Residential And Industral Uses", image: RemoteSecurtySolarLight },
// ];


//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4 text-center">Available Lightning Products</h1>

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
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }










import { useNavigate } from "react-router-dom";

import FiveWattAKTbulb from "../assets/FiveWattAKTbulb.jpg";
import MotionDectatorLight from "../assets/MotionDectatorLight.jpg";
import LEDSecurityLight from "../assets/LEDSecurityLight.jpg";
import FiftyWattAKTbulb from "../assets/FiftyWattAKTbulb.jpg";
import EightenWattPoplight from "../assets/EightenWattPoplight.jpg"; 
import EightenWattSurfaceLight from "../assets/EightenWattSurfaceLight.jpg";
import EightenWattAKTbulb from "../assets/EightenWattAKTbulb.jpg";
import DeckerSurfaceLight from "../assets/DeckerSurfaceLight.jpg";
import AKThalogineBulb from "../assets/AKThalogineBulb.jpg";
import AKTsolarStreetLight from "../assets/AKTsolarStreetLight.jpg";
import SolarCameraLED from "../assets/SolarCameraLED.jpg";
import StreetLight from "../assets/StreetLight.jpg";
import FloodLight from "../assets/FloodLight.jpg";
import ColoredFloodLight from "../assets/ColoredFloodLight.jpg";
import TenWattfloodLight from "../assets/TenWattfloodLight.jpg";
import RemoteSecurtySolarLight from "../assets/RemoteSecurtySolarLight.jpg";

export default function Product1() {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "5 watt AKT bulb, bright and clear", image: FiveWattAKTbulb, price: "₦2,500" },
    { id: 2, name: "Active Motion Sensor Security Light", image: MotionDectatorLight, price: "₦12,000" },
    { id: 3, name: "Quality Outdoor Light ", image: LEDSecurityLight, price: "₦8,500" },
    { id: 4, name: "50 Watt AKT Bulb With A year Warrantee", image: FiftyWattAKTbulb, price: "₦15,000" },
    { id: 5, name: "18Watt P.O.P Panel Light ", image: EightenWattPoplight, price: "₦9,000" },
    { id: 6, name: "18Watt Surface Panel light", image: EightenWattSurfaceLight, price: "₦5,000" },
    { id: 7, name: "AKT Energy-Saving Bulb", image: EightenWattAKTbulb, price: "₦3,500" },
    { id: 8, name: "Decker Surface Light", image: DeckerSurfaceLight, price: "₦7,000" },
    { id: 9, name: "Halogen Bulb", image: AKThalogineBulb, price: "₦6,500" },
    { id: 10, name: "AKT Solar Street Light", image: AKTsolarStreetLight, price: "₦50,000" },
    { id: 11, name: "Solar Camera LED", image: SolarCameraLED, price: "₦45,000" },
    { id: 12, name: "Street Light", image: StreetLight, price: "₦30,000" },
    { id: 13, name: "Flood Light", image: FloodLight, price: "₦25,000" },
    { id: 14, name: "Colored Flood Light", image: ColoredFloodLight, price: "₦28,000" },
    { id: 15, name: "10W Flood Light", image: TenWattfloodLight, price: "₦10,000" },
    { id: 16, name: "Remote Security Solar Light", image: RemoteSecurtySolarLight, price: "₦18,500" },
  ];

  return (
    <div className="p-6">
      {/* Back Button */}
      <button
        className="mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 bg-blue-600"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-4 text-center">Available Lighting Products</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg"
              onError={(e) => (e.target.src = "/images/placeholder.jpg")} // Fallback image
            />
            <h2 className="text-lg font-semibold mt-2 text-gray-800 text-center">
              {product.name}
            </h2>
            <p className="text-gray-600 font-semibold text-center">{product.price}</p>

            {/* Add to Cart Button */}
            <button
              className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={() => alert(`Added ${product.name} to cart!`)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
