
import Image from 'next/image';

const products = [
  { name: "Laptop", price: "$1200", image: "/images/laptop.jpg" },
  { name: "Shoes", price: "$80", image: "/images/sneakers.jpg" },
  { name: "Coffee Maker", price: "$150", image: "/images/coffee_maker.webp" },
];

const FeaturedProducts = () => (
  <div className="py-12">
    <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {products.map((product) => (
        <div key={product.name} className="bg-white p-4 rounded-lg shadow">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={300}
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="text-xl font-bold mt-4">{product.name}</h3>
          <p className="text-gray-600">{product.price}</p>
          <a href={`/product/${product.name.toLowerCase()}`} className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">View Details</a>
        </div>
      ))}
    </div>
  </div>
);

export default FeaturedProducts;
