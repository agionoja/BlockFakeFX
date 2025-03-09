export default function Product1() {
    return (
      <div className="flex flex-col items-center p-6">
        <img src="/images/product1.jpg" alt="Product 1" className="w-64 h-64 object-cover rounded-lg" />
        <h1 className="text-2xl font-bold mt-4">Product 1</h1>
        <p className="text-gray-600 mt-2">Detailed description of Product 1.</p>
        <p className="text-lg font-semibold mt-2">$50</p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">Buy Now</button>
      </div>
    );
  }