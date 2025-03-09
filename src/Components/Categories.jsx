function Categories() {
    return (
      <section className="p-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-4">Categories</h2>
        <div className="flex justify-around">
          {["Clothing", "Electronics", "Shoes", "Accessories"].map((cat) => (
            <div key={cat} className="border p-4 rounded-md">
              {cat}
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Categories;
  