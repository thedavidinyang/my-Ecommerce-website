import Image from 'next/image';

const categories = [
  { name: "Electronics", image: "/images/electronics.jpg" },
  { name: "Clothing", image: "/images/clothing.jpg" },
  { name: "Home Appliances", image: "/images/home_appliances.jpg" },
];

const ProductCategories = () => (
  <div className="py-12 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-8">Shop by Categories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {categories.map((category) => (
        <div key={category.name} className="text-center">
          <Image
            src={category.image}
            alt={category.name}
            width={200}
            height={200}
            className="rounded-lg object-cover"
          />
          <h3 className="text-xl mt-4">{category.name}</h3>
        </div>
      ))}
    </div>
  </div>
);

export default ProductCategories;
