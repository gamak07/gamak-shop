import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="hero bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg mb-8">
          Discover the best products at unbeatable prices.
        </p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => navigate("/products")}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
