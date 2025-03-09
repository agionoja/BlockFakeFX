
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; 
// Animation Variant
const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeout" } }
};

// Product Details Component
const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h1 className="text-center text-red-500">Not Available</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={scaleUp}
      >
        <motion.img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-60 object-cover rounded-lg"
          variants={scaleUp}
        />
        <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="text-lg font-semibold mt-4 text-blue-600">{product.price}</p>

        {/* Buttons Section */}
        <div className="mt-6 flex justify-center gap-4 w-full">
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition flex items-center"
          >
            ◀ Back
          </button>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition">
            Add to Cart
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetails;












