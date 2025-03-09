import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className="relative bg-cover bg-center h-96 flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/hero-banner.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
        <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
        <p className="mt-2">Discover amazing products at great prices</p>
        <Link to="/products" className="mt-4 inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default Hero;

  