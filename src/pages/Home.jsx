import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FeaturedProducts from "../Components/FeaturedProducts";

const gridAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } },
};

function Home() {
  return (
    <div className="min-h-screen bg-blue-500">
      <Navbar /> 


<motion.div
      className="relative bg-cover bg-center h-96 flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/hero-banner.jpg')" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="bg-black bg-opacity-50 p-6 rounded-lg text-center"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }} 
      >
        <motion.h1 
          className="text-4xl font-bold" 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          Welcome to Auxmmerce Store
        </motion.h1>
        <motion.p 
          className="mt-2" 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          Discover amazing products at great prices
        </motion.p>
        <motion.div 
          whileHover={{ scale: 1.1 }} 
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/products"
            className="mt-4 inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            Shop Now
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>



      <FeaturedProducts/>.
     

      <Footer /> 
    </div>
  );
}

export default Home;

