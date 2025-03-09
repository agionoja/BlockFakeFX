import { useCart } from "../context/CartContext"; 
import { useNavigate } from "react-router-dom"; 

function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate(); // Hook for navigating back

  return (
    <div className="p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-600 text-black bg-blue-600 rounded-md hover:bg-gray-700 transition"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center p-4 border-b">
            <span className="text-lg font-medium">{item.name} - ₦{item.price}</span>
            <button 
              onClick={() => removeFromCart(item.id)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;



