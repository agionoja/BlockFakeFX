import { Link } from "react-router-dom";
import StripedCoilsCables from "../assets/StripedCoilsCables.jpg";
import ElectTools from "../assets/ElectTools.jpg";
import RemoteSecurtySolarLight from "../assets/RemoteSecurtySolarLight.jpg";
import PVC4 from "../assets/PVC4.jpg";

const products = [
  {
    id: 1,
    name: "Wires and More",
    image: StripedCoilsCables,
    link: "/product1", // Links to Product1 page
  },
  {
    id: 2,
    name: "AKT Light",
    image: RemoteSecurtySolarLight,
    link: "/product2", // Links to Product2 page
  },
  {
    id: 3,
    name: "Electrical Tools And More",
    image:ElectTools ,
    link: "/product3", // Links to Product3 page
  },
  {
    id: 4,
    name: "Electrical PVC Pipes",
    image: PVC4,
    link: "/product4", // Links to Product4 page
  },
];

function FeaturedProducts() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="mb-6 text-2xl font-semibold">Featured Products</h2>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="rounded-lg bg-white p-4 shadow">
            {/* Clickable image */}
            <Link to={product.link}>
              <div className="h-40 w-full overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </Link>

            {/* Product Details */}
            <h3 className="mt-4 text-lg font-medium">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>

            {/* View Product Button */}
            <Link
              to={product.link}
              className="mt-2 inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
