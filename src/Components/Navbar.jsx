import Logo from "../assets/Logo.jpg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import useCart hook

function Navbar() {
  const navigate = useNavigate(); // Enables navigation
  const location = useLocation(); // Gets current route
  const { cart } = useCart(); // Access cart from context

  // Show Back button if NOT on the Home page ("/")
  const showBackButton = location.pathname !== "/";

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        
        {showBackButton && (
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
          >
            🔙 Back
          </button>
        )}



      <div className="flex items-center space-x-4">
        
          <img src={Logo} alt="Logo" className="h-10 w-auto" /> 
    
      </div>



      </div>

      {/* Navigation Links */}
      <div className="space-x-6 hidden md:flex">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/products" className="text-gray-700 hover:text-blue-600">Products</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 rounded-md w-1/3 md:w-1/4 lg:w-1/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Cart & Profile Buttons */}
      <div className="flex space-x-4">
        <Link to="/cart" className="relative px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          🛒 Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
        <Link to="/profile" className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition">
          👤 Profile
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
