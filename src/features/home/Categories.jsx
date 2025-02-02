import { useProducts } from "../products/useProducts";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const { products } = useProducts();

  // Predefined categories with correct image paths
  const predefinedCategories = [
    { name: "Appliances", image: "/appliances.jpg" },
    { name: "Arts & Crafts", image: "/arts_crafts.jpg" },
    { name: "Baby Products", image: "/baby_products.jpg" },
    { name: "Books", image: "/books.jpg" },
    { name: "Electronics", image: "/electronics.jpg" },
    { name: "Fashion", image: "/fashion.jpg" },
    { name: "Pet Supplies", image: "/pet_supplies.jpg" },
    { name: "Sports", image: "/sports.jpg" },
    { name: "Toys & Games", image: "/toys_games.webp" },
    { name: "Video Games", image: "/video_games.jpg" },
  ];

  // Extract unique categories dynamically from product data and normalize them
  const productCategories = new Set(
    products?.products?.map((item) => item.category.trim().toLowerCase())
  );

  // Create a new merged array ensuring no duplicates (case-insensitive check)
  const mergedCategories = [...predefinedCategories];

  productCategories.forEach((categoryName) => {
    // Find matching category ignoring case
    const existingCategory = predefinedCategories.find(
      (c) => c.name.toLowerCase() === categoryName
    );

    if (!existingCategory) {
      mergedCategories.push({
        name: categoryName
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize words
          .join(" "),
        image: `/${categoryName.replace(/\s+/g, " ")}.jpg`, // Default image path
      });
    }
  });

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName.toLowerCase().replace(/\s+/g, " ")}`);
  };

  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Shop by Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {mergedCategories.map((category, index) => (
          <div
            key={index}
            className="text-center cursor-pointer"
            onClick={() => handleCategoryClick(category.name)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover rounded-lg"
              onError={(e) => (e.target.src = "/placeholder.jpg")} // Fallback for missing images
            />
            <p className="mt-2 font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
